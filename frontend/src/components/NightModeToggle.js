import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors'

const DarkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[800],
      '&:hover': {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

export default function ControlledSwitches({checked, onToggle}) {

    const handleChange = (event) => {
        const newChecked = event.target.checked;
        onToggle(event.target.checked)
        console.log("Checked is equal to: " + newChecked)
    };

    return (
        <FormControlLabel
            control={
                <DarkSwitch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    
                />
                
            }
            label="Toggle Light/Dark Theme"
            id='darktoggle'
            data-status={checked ? "dark" : "light"}
        />
    );
}
