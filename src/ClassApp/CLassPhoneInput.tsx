import { Component, createRef } from "react";
import { PhoneInputState } from "../types";

type propItems = {
  phoneInputState: PhoneInputState;
  setPhoneInputState: (index: number, value: string) => void;
};

export class PhoneInput extends Component<propItems> {
  state = {
    phoneInputState: ["", "", "", ""],
  };

  render() {
    const ref0 = createRef<HTMLInputElement>();
    const ref1 = createRef<HTMLInputElement>();
    const ref2 = createRef<HTMLInputElement>();
    const ref3 = createRef<HTMLInputElement>();

    const refs = [ref0, ref1, ref2, ref3];

    const createOnChangeHandler = (index: 0 | 1 | 2 | 3, value: string) => {
      const lengths = [2, 2, 2, 1];
      const currentMaxLength = lengths[index];
      const nextRef = refs[index + 1];
      const prevRef = refs[index - 1];
      const shouldGoToNextRef = currentMaxLength === value.length && nextRef;
      const shouldGoToPrevRef = value.length === 0;

      shouldGoToNextRef && nextRef.current?.focus();

      shouldGoToPrevRef &&
        prevRef &&
        prevRef.current &&
        prevRef.current.focus();
    };

    return (
      <>
        <input
          type="text"
          id="phone-input-1"
          placeholder="55"
          ref={ref0}
          value={
            this.props.phoneInputState[0].replace(/\D/g, "").length > 2
              ? this.props.phoneInputState[0].replace(/\D/g, "").slice(0, 2)
              : this.props.phoneInputState[0].replace(/\D/g, "")
          }
          onChange={(e) => {
            const finalValue =
              e.target.value.replace(/\D/g, "").length > 2
                ? e.target.value.replace(/\D/g, "").slice(0, 2)
                : e.target.value.replace(/\D/g, "");
            this.props.setPhoneInputState(0, finalValue);
            this.setState({
              phoneInputState: [
                finalValue,
                this.props.phoneInputState[1],
                this.props.phoneInputState[2],
                this.props.phoneInputState[3],
              ],
            });
            createOnChangeHandler(0, finalValue);
          }}
        />
        -
        <input
          type="text"
          id="phone-input-2"
          placeholder="55"
          ref={ref1}
          value={
            this.props.phoneInputState[1].replace(/\D/g, "").length > 2
              ? this.props.phoneInputState[1].replace(/\D/g, "").slice(0, 2)
              : this.props.phoneInputState[1].replace(/\D/g, "")
          }
          onChange={(e) => {
            const finalValue =
              e.target.value.replace(/\D/g, "").length > 2
                ? e.target.value.replace(/\D/g, "").slice(0, 2)
                : e.target.value.replace(/\D/g, "");
            this.props.setPhoneInputState(1, finalValue);
            this.setState({
              phoneInputState: [
                this.props.phoneInputState[0],
                finalValue,
                this.props.phoneInputState[2],
                this.props.phoneInputState[3],
              ],
            });
            createOnChangeHandler(1, finalValue);
          }}
        />
        -
        <input
          type="text"
          id="phone-input-3"
          placeholder="55"
          ref={ref2}
          value={
            this.props.phoneInputState[2].replace(/\D/g, "").length > 2
              ? this.props.phoneInputState[2].replace(/\D/g, "").slice(0, 2)
              : this.props.phoneInputState[2].replace(/\D/g, "")
          }
          onChange={(e) => {
            const finalValue =
              e.target.value.replace(/\D/g, "").length > 2
                ? e.target.value.replace(/\D/g, "").slice(0, 2)
                : e.target.value.replace(/\D/g, "");
            this.props.setPhoneInputState(2, finalValue);
            this.setState({
              phoneInputState: [
                this.props.phoneInputState[0],
                this.props.phoneInputState[1],
                finalValue,
                this.props.phoneInputState[3],
              ],
            });
            createOnChangeHandler(2, finalValue);
          }}
        />
        -
        <input
          type="text"
          id="phone-input-4"
          placeholder="5"
          ref={ref3}
          value={
            this.props.phoneInputState[3].replace(/\D/g, "").length > 1
              ? this.props.phoneInputState[3].replace(/\D/g, "").slice(0, 1)
              : this.props.phoneInputState[3].replace(/\D/g, "")
          }
          onChange={(e) => {
            const finalValue =
              e.target.value.replace(/\D/g, "").length > 1
                ? e.target.value.replace(/\D/g, "").slice(0, 1)
                : e.target.value.replace(/\D/g, "");
            this.props.setPhoneInputState(3, finalValue);
            this.setState({
              phoneInputState: [
                this.props.phoneInputState[0],
                this.props.phoneInputState[1],
                this.props.phoneInputState[2],
                finalValue,
              ],
            });
            createOnChangeHandler(3, finalValue);
          }}
        />
      </>
    );
  }
}
