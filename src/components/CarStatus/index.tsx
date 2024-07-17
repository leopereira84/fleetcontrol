import { Key, Car } from 'phosphor-react-native';

import { Container, IconBox, Message, TextHighlight } from './styles';
import { useTheme } from 'styled-components';

type Props = {
  licensePlate?: string | null
}

export function CarStatus({ licensePlate = null }: Props) {
  const theme = useTheme()

  const Icon = licensePlate ? Key : Car
  const message = licensePlate ? `Veículo ${licensePlate} em uso. ` : `Nenhum veículo em uso. `
  const status = licensePlate ? 'chegada' : 'saída'

  return (
    <Container>
      <IconBox>
        <Icon 
          size={32}
          color={theme.COLORS.BRAND_LIGHT}
        />
      </IconBox>

      <Message>
        {message}

        <TextHighlight>
          Clique aqui para regitrar a {status}
        </TextHighlight>
      </Message>

    </Container>
  );
}