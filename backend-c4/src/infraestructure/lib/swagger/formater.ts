import { z } from "zod";

export const zodToOpenApi = (schema: z.ZodTypeAny): any => {
  if (schema instanceof z.ZodObject) {
    const shape = schema.shape;
    const properties: Record<string, any> = {};
    const required: string[] = [];

    Object.entries(shape).forEach(([key, value]) => {
      properties[key] = zodToOpenApi(value as z.ZodTypeAny);
      if (
        !(value instanceof z.ZodOptional) &&
        !(value instanceof z.ZodDefault)
      ) {
        required.push(key);
      }
    });

    return {
      type: "object",
      properties,
      ...(required.length > 0 ? { required } : {}),
    };
  }

  if (schema instanceof z.ZodString) {
    const def: any = { type: "string" };

    schema._def.checks?.forEach((check: any) => {
      if (check.kind === "email") def.format = "email";
      if (check.kind === "url") def.format = "uri";
      if (check.kind === "regex") def.pattern = check.regex.source;
      if (check.kind === "min") def.minLength = check.value;
      if (check.kind === "max") def.maxLength = check.value;
    });

    return def;
  }

  if (schema instanceof z.ZodNumber) {
    const def: any = { type: "number" };

    schema._def.checks?.forEach((check: any) => {
      if (check.kind === "min") def.minimum = check.value;
      if (check.kind === "max") def.maximum = check.value;
      if (check.kind === "int") def.type = "integer";
    });

    return def;
  }

  if (schema instanceof z.ZodBoolean) {
    return { type: "boolean" };
  }

  if (schema instanceof z.ZodArray) {
    return {
      type: "array",
      items: zodToOpenApi(schema.element),
      ...(schema._def.minLength
        ? { minItems: schema._def.minLength.value }
        : {}),
      ...(schema._def.maxLength
        ? { maxItems: schema._def.maxLength.value }
        : {}),
    };
  }

  if (schema instanceof z.ZodOptional) {
    return zodToOpenApi(schema._def.innerType);
  }

  if (schema instanceof z.ZodDefault) {
    return zodToOpenApi(schema._def.innerType);
  }

  if (schema instanceof z.ZodEnum) {
    return { type: "string", enum: schema._def.values };
  }
  return { type: "object" };
};
