import { TextField as MuiTextField } from "@mui/material";
import * as React from "react";
import { useController } from "react-hook-form";

const TextField = ({control,  helperText, name, ...props }) => {

  const {
    field: { ref, value, ...field },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  const computedHelperText = invalid ? error?.message : helperText;

  return (
    <div>
      <MuiTextField
        variant="outlined"
        margin="normal"
        {...field}
        {...props}
        id={field.name}
        value={value}
        label={`What's your ${name}? *`}
        inputRef={ref}
        error={invalid}
        aria-invalid={invalid}
        helperText={<span>{computedHelperText}</span>}
        inputProps={{
          autoComplete: "on",
        }}
      />
    </div>
  );
};

export default TextField;
