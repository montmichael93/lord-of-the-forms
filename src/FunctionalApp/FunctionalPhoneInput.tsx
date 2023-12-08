import { ChangeEventHandler, Dispatch, SetStateAction, useRef } from "react";
import { PhoneInputState } from "../types";

export const PhoneInput = ({
  phoneInputState,
  setPhoneInputState,
}: {
  phoneInputState: PhoneInputState;
  setPhoneInputState: Dispatch<SetStateAction<PhoneInputState>>;
}) => {
  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);

  const refs = [ref0, ref1, ref2, ref3];

  const createOnChangeHandler =
    (index: 0 | 1 | 2 | 3): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const lengths = [2, 2, 2, 1];
      const currentMaxLength = lengths[index];
      const nextRef = refs[index + 1];
      const prevRef = refs[index - 1];
      const value = e.target.value;

      const shouldGoToNextRef = currentMaxLength === value.length && nextRef;

      const shouldGoToPrevRef = value.length === 0;

      const newState = phoneInputState.map((PhoneInput, phoneInputIndex) =>
        index === phoneInputIndex ? e.target.value : PhoneInput
      ) as PhoneInputState;

      shouldGoToNextRef && nextRef.current?.focus();

      shouldGoToPrevRef &&
        prevRef &&
        prevRef.current &&
        prevRef.current.focus();
      setPhoneInputState(newState);
    };

  return (
    <>
      <input
        type="text"
        id="phone-input-1"
        placeholder="55"
        ref={ref0}
        value={
          phoneInputState[0].replace(/\D/g, "").length > 2
            ? phoneInputState[0].replace(/\D/g, "").slice(0, 2)
            : phoneInputState[0].replace(/\D/g, "")
        }
        onChange={createOnChangeHandler(0)}
      />
      -
      <input
        type="text"
        id="phone-input-2"
        placeholder="55"
        ref={ref1}
        value={
          phoneInputState[1].replace(/\D/g, "").length > 2
            ? phoneInputState[1].replace(/\D/g, "").slice(0, 2)
            : phoneInputState[1].replace(/\D/g, "")
        }
        onChange={createOnChangeHandler(1)}
      />
      -
      <input
        type="text"
        id="phone-input-3"
        placeholder="55"
        ref={ref2}
        value={
          phoneInputState[2].replace(/\D/g, "").length > 2
            ? phoneInputState[2].replace(/\D/g, "").slice(0, 2)
            : phoneInputState[2].replace(/\D/g, "")
        }
        onChange={createOnChangeHandler(2)}
      />
      -
      <input
        type="text"
        id="phone-input-4"
        placeholder="5"
        ref={ref3}
        value={
          phoneInputState[3].replace(/\D/g, "").length > 1
            ? phoneInputState[3].replace(/\D/g, "").slice(0, 1)
            : phoneInputState[3].replace(/\D/g, "")
        }
        onChange={createOnChangeHandler(3)}
      />
    </>
  );
};
