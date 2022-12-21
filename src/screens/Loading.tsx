import { Logo } from "../components/atoms/Logo";
import { ContLoading } from "../components/molecules/ContLoading";
import { NavigationProps } from "../types/navigation";

export const Loading = ({ navigation }: NavigationProps) => (
  <>
    <ContLoading>
      <Logo navigation={navigation} />
    </ContLoading>
  </>
);
