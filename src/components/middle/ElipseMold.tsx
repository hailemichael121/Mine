import { Box } from "@chakra-ui/react";

interface Props {
  borderRadius: string;
  w: string;
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

  opacity?: string;
  rotate?: string;
  Trotate?: string;
}
const ElipseMold = ({
  borderRadius,
  w,
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
        borderRadius={borderRadius}
        w={w}
        h={h}
        backgroundColor={backgroundColor}
        m={m}
        mt={mt}
        ml={ml}
        mr={mr}
        mb={mb}
        opacity={opacity}
        position="absolute"
        transform={`rotate(${rotate})`}
        _hover={{
          transform: `rotate(${Trotate})`,
          transition: "0.7s",
          mt: `${Tmt}`,
          ml: `${Tml}`,
          mr: `${Tmr}`,
          mb: `${Tmb}`,
        }}
      ></Box>
    </>
  );
};

export default ElipseMold;
