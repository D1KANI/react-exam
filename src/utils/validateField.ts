import { Errors } from "@/types/errors";
import { Validators } from "@/types/validators";

const validateFieldRequired = (value: string) => {
  if (!value || !value.length) {
    return Errors.REQUIRED;
  }
  return null;
};

const validateFieldMaxLength = (value: string, max: number) => {
  if (value.length > max) {
    return `${Errors.MAX_LENGTH} ${max}`;
  }
  return null;
};

const validateFieldMinLength = (value: string, min: number) => {
  if (value.length < min) {
    return `${Errors.MIN_LENGTH} ${min}`;
  }
  return null;
};

export const validateField = (
  value: string,
  validators: Partial<Record<Validators, boolean | number>>,
) => {
  const errors: string[] = [];
  for (const [key, arg] of Object.entries(validators)) {
    if (key === Validators.REQUIRED) {
      const error = validateFieldRequired(value);
      if (error) errors.push(error);
    }

    if (key === Validators.MAX_LENGTH && typeof arg === "number") {
      const error = validateFieldMaxLength(value, arg);
      if (error) errors.push(error);
    }

    if (key === Validators.MIN_LENGTH && typeof arg === "number") {
      const error = validateFieldMinLength(value, arg);
      if (error) errors.push(error);
    }
  }

  return errors.length ? errors[0] : null;
};
