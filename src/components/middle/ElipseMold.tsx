import { Box } from "@chakra-ui/react";
import { RefObject } from "react";

interface Props {
  borderRadius: string;
  w: string;
  Tw?: string;
  h: string;
  backgroundColor: string;
  m?: string;
  mt?: string;
  mr?: string;
  ml?: string;
  mb?: string;
  Tmt?: string;
  Tmr?: string;
  Tml?: string;
  Tmb?: string;
  id?: string;
  ref?: RefObject<HTMLDivElement>;

  opacity?: string;
  rotate?: string;
  Trotate?: string;
}
const ElipseMold = ({
  id,
  ref,
  borderRadius,
  w,
  Tw,
  h,
  backgroundColor,
  m,
  mt,
  mr,
  Tmr,
  ml,
  mb,
  Tmt,
  Tml,
  Tmb,
  opacity,
  rotate,
  Trotate,
}: Props) => {
  return (
    <>
      <Box
        ref={ref}
        borderRadius={borderRadius}
        w={w}
        h={h}
        backgroundColor={backgroundColor}
        m={m}
        mt={mt}
        ml={ml}
        mr={mr}
        mb={mb}
        id={id}
        opacity={opacity}
        position="absolute"
        transform={`rotate(${rotate})`}
        _hover={{
          transform: `rotate(${Trotate})`,
          transition: "1.4s",
          mt: `${Tmt}`,
          ml: `${Tml}`,
          mr: `${Tmr}`,
          mb: `${Tmb}`,
          w: `${Tw}`,
        }}
      ></Box>
    </>
  );
};

export default ElipseMold;
