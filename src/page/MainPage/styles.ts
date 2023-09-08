import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStart = styled.input`
  display: flex;
  /* position: relative; */
  /* top: 0; */
  z-index: 15;
  width: 358px;
  height: 48px;
  border-radius: 10px;
`;

export const InputEnd = styled.input`
  display: flex;
  /* position: relative; */
  /* top: 10; */
  z-index: 15;
  width: 358px;
  height: 48px;
  border-radius: 10px;
`;