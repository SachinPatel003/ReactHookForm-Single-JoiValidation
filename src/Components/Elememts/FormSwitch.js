import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useController } from "react-hook-form";
import { Switch } from "@mui/material";

export default function FormSwitch({ control, name, helperText }) {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl error={invalid} sx={{ my: 3 }}>
        <FormLabel component="legend">Switch</FormLabel>
        <FormControlLabel
          control={<Switch onChange={onChange} value={value} />}
          label="Are you intrested?"
        />
        <FormHelperText>{invalid ? error?.message : helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
