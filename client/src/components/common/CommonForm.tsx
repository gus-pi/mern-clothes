import { formControlType } from '@/config';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const CommonForm = ({ formControls }: { formControls: formControlType[] }) => {
  const renderInputsByComponentType = (getControlItem: formControlType) => {
    let element = null;
    switch (getControlItem.componentType) {
      case 'input':
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
        break;
      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
        break;
    }
    return element;
  };

  return (
    <form action="">
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem: formControlType) => (
          <div key={controlItem.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType}
          </div>
        ))}
      </div>
    </form>
  );
};
export default CommonForm;
