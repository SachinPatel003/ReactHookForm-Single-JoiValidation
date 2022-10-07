import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useController } from "react-hook-form";
import { FormControl, FormHelperText, Typography } from "@mui/material";

export default function FormSlider({ name, control, helperText }) {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <Box >
      <FormControl error={invalid}>
        <Typography>My Slider</Typography>
        <Slider sx={{width:300}} onChange={onChange} value={value} />
        <FormHelperText>{invalid ? error?.message : helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
