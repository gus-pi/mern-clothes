import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { FormEvent } from 'react';

export interface FormControl {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  componentType: 'input' | 'select' | 'textarea';
  options?: { id: string; label: string }[];
}

interface CommonFormProps {
  formControls: FormControl[];
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
  onSubmit: (event: FormEvent) => void;
  buttonText?: string;
  isBtnDisabled?: boolean;
}

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText = 'Submit',
  isBtnDisabled,
}: CommonFormProps) {
  function renderInputsByComponentType(getControlItem: FormControl) {
    const value = formData[getControlItem.name] || '';

    switch (getControlItem.componentType) {
      case 'input':
        return (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
      case 'select':
        return (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options?.map((optionItem) => (
                <SelectItem key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'textarea':
        return (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
      default:
        return null;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText}
      </Button>
    </form>
  );
}

export default CommonForm;
