import React from "react";
import FormCheckBox from "../Elememts/FormCheckBox";
import FormRadio from "../Elememts/FormRadio";
import FormRating from "../Elememts/FormRating";
import FormSelect from "../Elememts/FormSelect";
import FormSlider from "../Elememts/FormSlider";
import FormSwitch from "../Elememts/FormSwitch";
import TextField from "../Elememts/TextField";

const UserInformation = ({ control }) => {
  return (
    <>
      <TextField
        control={control}
        name="firstName"
        label="First name"
        helperText="Your First name"
        fullWidth
      />
      <FormRadio control={control} name="MyRadio" helperText="Your Radio" />
      <FormSelect control={control} name="MySelect" helperText="Your Select"  />
      <FormCheckBox control={control} name="MyChechBOx" helperText="Your CheckBox"/>
      <FormSlider control={control} name="MySlider" helperText="Your Slider" />
      <FormSwitch control={control} name="MySwitch" helperText="Your Switch"  />
      <FormRating control={control} name="MyRating" helperText="Your Rating"/>
    </>
  );
};

export default UserInformation;
