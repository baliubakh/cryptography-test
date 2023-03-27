import { useFormikContext } from "formik";
import React, { useState, useMemo } from "react";
import * as Styled from "../styles/auth.styled";

interface IDropdown {
  setCurrHeader: React.Dispatch<React.SetStateAction<string>>;
  currHeader: string;
  name: string;
  header: string;
  title: string;
  options: string[];
  error?: string;
}

const Dropdown = ({
  setCurrHeader,
  currHeader,
  name,
  header,
  title,
  options,
  error,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setFieldValue } = useFormikContext();

  const handleChange = (option: string) => {
    setIsOpen(false);
    setCurrHeader(option);
    setFieldValue(name, option);
  };

  const handlePreviewClick = () => {
    setIsOpen((old) => !old);
  };

  const openClassName = useMemo(() => {
    return isOpen ? "open" : "hidden";
  }, [isOpen]);

  const headerClassName = useMemo(() => {
    return currHeader && currHeader !== header ? "selected" : "placeholder";
  }, [currHeader, header]);

  const preview = currHeader ? currHeader : header;

  return (
    <Styled.InputWrapper>
      <Styled.InputTitle>{title}</Styled.InputTitle>
      <Styled.DropdownPreview
        onClick={handlePreviewClick}
        className={headerClassName}
      >
        {preview.toUpperCase()}
        <Styled.DropdownArrow className={openClassName}>
          <span />
          <span />
        </Styled.DropdownArrow>
      </Styled.DropdownPreview>
      <Styled.AuthError>{error}</Styled.AuthError>
      <Styled.DropdownContent className={openClassName}>
        {options.map((option, idx) => (
          <Styled.DropdownOption onClick={() => handleChange(option)} key={idx}>
            {option}
          </Styled.DropdownOption>
        ))}
      </Styled.DropdownContent>
    </Styled.InputWrapper>
  );
};

export default Dropdown;
