import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import"./boutons.css";

export default function Checkboxe() {
    return (
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" className="Checkbox" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" className="Checkbox" />
      </FormGroup>
    );
  }
