import { Component, ComponentProps } from "react";

type PropItems = {
  labelText: string;
  inputProps: ComponentProps<"input">;
};
export class TextInput extends Component<PropItems> {
  render() {
    const { labelText, inputProps } = this.props;
    return (
      <div className="input-wrap">
        <label>{labelText}:</label>
        <input type="text" {...inputProps} />
      </div>
    );
  }
}
