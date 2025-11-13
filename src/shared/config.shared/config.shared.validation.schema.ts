import * as Joi from 'joi';

export const validate = (config: Record<string, unknown>) => {
  const schema = Joi.object({
    MONGO_URI: Joi.string().required(),
    PORT: Joi.number().default(3000),
    SERVICE_NAME: Joi.string().required(),
    HOST: Joi.string().default("locahost")
  });

  const { error, value } = schema.validate(config, { allowUnknown: true });
  if (error) throw new Error(`Config validation error: ${error.message}`);
  return value;
};
