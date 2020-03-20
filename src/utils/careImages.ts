import cough from '~/assets/svg/cough.svg';
import face from '~/assets/svg/face.svg';
import handWash from '~/assets/svg/hand-wash.svg';
import metal from '~/assets/svg/metal.svg';
import openDoor from '~/assets/svg/open-door.svg';
import quarantine from '~/assets/svg/quarantine.svg';

interface Images {
  [key: string]: string;
}

export default {
  cough,
  face,
  handWash,
  metal,
  openDoor,
  quarantine,
} as Images;
