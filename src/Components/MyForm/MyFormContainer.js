import React, { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import UserInformation from "../Pages/UserInformation";
import Joi from "joi";

const MyFormContainer = () => {
  const ValidationSchema = Joi.object({
    firstName: Joi.string().required().min(4),
    MyRadio: Joi.string().required(),
    MySelect: Joi.number().required(),
    MyChechBOx: Joi.boolean().optional(),
    MySlider: Joi.number().required().min(10).max(70),
    MySwitch: Joi.boolean().required(),
    MyRating: Joi.number().required(),
  });

  const formMethods = useForm({
    resolver: joiResolver(ValidationSchema),
    defaultValues: {
      firstName: "",
      MyRadio: "",
      MySelect: "",
      MyChechBOx: false,
      MySlider: null,
      MySwitch: false,
      MyRating: null
    },
    mode: "all",
  });

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = formMethods;

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInformation control={control} />
        <Box margin={1}>
          <Button variant="contained" type="submit" color="primary">
            submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default MyFormContainer;
