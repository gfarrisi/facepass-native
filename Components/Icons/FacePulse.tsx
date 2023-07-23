import React, { FC } from 'react';
import Svg, { Defs, G, ClipPath, Path } from 'react-native-svg';

interface FacePulseProps {
  size?: number;
  width?: number;
  color?: string;
}

export const FacePulse: FC<FacePulseProps> = (props) => {
  const ratio = 375 / 375;
  const size = props.size || props.width || 375;
  const width = size;
  const height = size * ratio;
  const color = props.color || '#757575';
  return (
    <Svg width={width} viewBox="0 0 375 374.999991" height={height}>
      <Defs>
        <ClipPath id="008995b6a5">
          <Path
            d="M 72.644531 26.726562 L 266.886719 26.726562 L 266.886719 337.175781 L 72.644531 337.175781 Z M 72.644531 26.726562 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="cd3ec1e450">
          <Path
            d="M 253.554688 193.96875 L 253.441406 208.605469 L 244.40625 212.222656 L 229.785156 251.691406 L 230.09375 290.46875 L 237.679688 316.605469 L 195.773438 343.117188 L 143.757812 343.117188 L 101.847656 316.605469 L 109.433594 290.46875 L 109.746094 251.691406 L 95.121094 212.222656 L 86.089844 208.605469 L 85.972656 193.96875 L 72.644531 159.113281 L 72.765625 143.085938 L 74.070312 141.492188 L 89.703125 144.730469 L 88.472656 132.667969 L 96.125 74.804688 L 109.101562 47.066406 L 132.851562 34.441406 L 169.765625 26.726562 L 206.679688 34.441406 L 230.429688 47.066406 L 243.402344 74.804688 L 251.058594 132.667969 L 249.824219 144.730469 L 265.460938 141.492188 L 266.761719 143.085938 L 266.886719 159.113281 Z M 253.554688 193.96875 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="c52d204ccb">
          <Path
            d="M 253.554688 193.96875 L 253.441406 208.605469 L 244.40625 212.222656 L 229.785156 251.691406 L 230.09375 290.46875 L 237.679688 316.605469 L 195.773438 343.117188 L 143.757812 343.117188 L 101.847656 316.605469 L 109.433594 290.46875 L 109.746094 251.691406 L 95.121094 212.222656 L 86.089844 208.605469 L 85.972656 193.96875 L 72.644531 159.117188 L 72.765625 143.085938 L 74.070312 141.492188 L 89.703125 144.730469 L 88.472656 132.664062 L 96.125 74.804688 L 109.101562 47.066406 L 132.851562 34.441406 L 169.765625 26.726562 L 206.679688 34.441406 L 230.429688 47.066406 L 243.402344 74.804688 L 251.058594 132.664062 L 249.824219 144.730469 L 265.460938 141.492188 L 266.761719 143.085938 L 266.886719 159.117188 L 253.554688 193.96875 "
            clipRule="nonzero"
          />
        </ClipPath>
        <linearGradient
          x1="0.00000000706949"
          gradientTransform="matrix(194.242415, 0, 0, 194.512555, 72.643321, 184.921856)"
          y1="0"
          x2="0.999998"
          gradientUnits="userSpaceOnUse"
          y2="0"
          id="f6737e0006"
        >
          <stop stopOpacity="1" stopColor="rgb(100%, 100%, 100%)" offset="0" />
          <stop
            stopOpacity="1"
            stopColor="rgb(100%, 100%, 100%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(100%, 100%, 100%)"
            offset="0.375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(100%, 100%, 100%)"
            offset="0.4375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(100%, 100%, 100%)"
            offset="0.46875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(100%, 100%, 100%)"
            offset="0.476562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(99.761963%, 99.761963%, 99.761963%)"
            offset="0.480469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(99.523926%, 99.523926%, 99.523926%)"
            offset="0.484375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(98.744202%, 98.744202%, 98.744202%)"
            offset="0.488281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(97.966003%, 97.966003%, 97.966003%)"
            offset="0.492187"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(97.431946%, 97.431946%, 97.431946%)"
            offset="0.496094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(96.899414%, 96.899414%, 96.899414%)"
            offset="0.5"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(96.118164%, 96.118164%, 96.118164%)"
            offset="0.503906"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(95.336914%, 95.336914%, 95.336914%)"
            offset="0.507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(94.755554%, 94.755554%, 94.755554%)"
            offset="0.511719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(94.174194%, 94.174194%, 94.174194%)"
            offset="0.515625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(93.319702%, 93.319702%, 93.319702%)"
            offset="0.519531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(92.466736%, 92.466736%, 92.466736%)"
            offset="0.523437"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(91.908264%, 91.908264%, 91.908264%)"
            offset="0.527344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(91.349792%, 91.349792%, 91.349792%)"
            offset="0.53125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(90.768433%, 90.768433%, 90.768433%)"
            offset="0.535156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(90.187073%, 90.187073%, 90.187073%)"
            offset="0.539062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(89.405823%, 89.405823%, 89.405823%)"
            offset="0.542969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(88.624573%, 88.624573%, 88.624573%)"
            offset="0.546875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(88.088989%, 88.088989%, 88.07373%)"
            offset="0.550781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(87.553406%, 87.553406%, 87.522888%)"
            offset="0.554687"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(86.776733%, 86.776733%, 86.761475%)"
            offset="0.558594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(86.000061%, 86.000061%, 86.000061%)"
            offset="0.5625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(85.317993%, 85.317993%, 85.317993%)"
            offset="0.566406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(84.637451%, 84.637451%, 84.637451%)"
            offset="0.570312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(84.056091%, 84.056091%, 83.862305%)"
            offset="0.574219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(83.474731%, 83.474731%, 83.087158%)"
            offset="0.578125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(82.74231%, 82.74231%, 82.548523%)"
            offset="0.582031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(82.009888%, 82.009888%, 82.009888%)"
            offset="0.585937"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(81.416321%, 81.416321%, 81.228638%)"
            offset="0.589844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(80.82428%, 80.82428%, 80.448914%)"
            offset="0.59375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(80.055237%, 80.055237%, 79.867554%)"
            offset="0.597656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(79.28772%, 79.28772%, 79.28772%)"
            offset="0.601562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(78.610229%, 78.610229%, 78.610229%)"
            offset="0.605469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(77.934265%, 77.934265%, 77.934265%)"
            offset="0.609375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(77.206421%, 77.206421%, 77.197266%)"
            offset="0.613281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(76.480103%, 76.480103%, 76.461792%)"
            offset="0.617188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(75.889587%, 75.889587%, 75.880432%)"
            offset="0.621094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(75.299072%, 75.299072%, 75.299072%)"
            offset="0.625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(74.708557%, 74.708557%, 74.517822%)"
            offset="0.628906"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(74.118042%, 74.118042%, 73.736572%)"
            offset="0.632812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(73.345947%, 73.345947%, 73.155212%)"
            offset="0.636719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(72.573853%, 72.573853%, 72.573853%)"
            offset="0.640625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(71.942139%, 71.942139%, 71.763611%)"
            offset="0.644531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(71.311951%, 71.311951%, 70.954895%)"
            offset="0.648438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(70.542908%, 70.542908%, 70.352173%)"
            offset="0.652344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(69.773865%, 69.773865%, 69.749451%)"
            offset="0.65625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(69.180298%, 69.180298%, 69.168091%)"
            offset="0.660156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(68.586731%, 68.586731%, 68.586731%)"
            offset="0.664062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(68.048096%, 68.048096%, 67.854309%)"
            offset="0.667969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(67.50946%, 67.50946%, 67.121887%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(66.73584%, 66.73584%, 66.525269%)"
            offset="0.675781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(65.962219%, 65.962219%, 65.930176%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(65.354919%, 65.354919%, 65.164185%)"
            offset="0.683594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(64.749146%, 64.749146%, 64.399719%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(63.908386%, 63.908386%, 63.722229%)"
            offset="0.691406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(63.067627%, 63.067627%, 63.044739%)"
            offset="0.695313"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(62.521362%, 62.521362%, 62.315369%)"
            offset="0.699219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(61.975098%, 61.975098%, 61.587524%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(61.193848%, 61.193848%, 61.000061%)"
            offset="0.707031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(60.412598%, 60.412598%, 60.412598%)"
            offset="0.710937"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(59.831238%, 59.831238%, 59.817505%)"
            offset="0.714844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(59.249878%, 59.249878%, 59.223938%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(58.64563%, 58.64563%, 58.454895%)"
            offset="0.722656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(58.042908%, 58.042908%, 57.687378%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(57.232666%, 57.232666%, 57.055664%)"
            offset="0.730469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(56.42395%, 56.42395%, 56.42395%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(55.84259%, 55.84259%, 55.651855%)"
            offset="0.738281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(55.262756%, 55.262756%, 54.881287%)"
            offset="0.742187"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(54.481506%, 54.481506%, 54.290771%)"
            offset="0.746094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(53.700256%, 53.700256%, 53.700256%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(53.118896%, 53.118896%, 52.966309%)"
            offset="0.753906"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(52.537537%, 52.537537%, 52.232361%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(51.986694%, 51.986694%, 51.652527%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(51.437378%, 51.437378%, 51.074219%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(50.57373%, 50.57373%, 50.392151%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(49.711609%, 49.711609%, 49.711609%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(49.130249%, 49.130249%, 48.933411%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(48.548889%, 48.548889%, 48.155212%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(47.821045%, 47.821045%, 47.621155%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(47.093201%, 47.093201%, 47.087097%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(46.508789%, 46.508789%, 46.305847%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(45.924377%, 45.924377%, 45.524597%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(45.143127%, 45.143127%, 44.943237%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(44.361877%, 44.361877%, 44.361877%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(43.780518%, 43.780518%, 43.580627%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(43.199158%, 43.199158%, 42.799377%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(42.567444%, 42.567444%, 42.167664%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(41.937256%, 41.937256%, 41.537476%)"
            offset="0.820312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(41.156006%, 41.156006%, 40.956116%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(40.374756%, 40.374756%, 40.374756%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(39.790344%, 39.790344%, 39.593506%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(39.205933%, 39.205933%, 38.812256%)"
            offset="0.835937"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(38.427734%, 38.427734%, 38.218689%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(37.649536%, 37.649536%, 37.625122%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(37.11853%, 37.11853%, 36.906433%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(36.587524%, 36.587524%, 36.187744%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(35.905457%, 35.905457%, 35.505676%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(35.224915%, 35.224915%, 34.825134%)"
            offset="0.859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(34.443665%, 34.443665%, 34.05304%)"
            offset="0.863281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(33.662415%, 33.662415%, 33.280945%)"
            offset="0.867187"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(33.081055%, 33.081055%, 32.739258%)"
            offset="0.871094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(32.499695%, 32.499695%, 32.199097%)"
            offset="0.875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(31.767273%, 31.767273%, 31.417847%)"
            offset="0.878906"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(31.036377%, 31.036377%, 30.636597%)"
            offset="0.882812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(30.455017%, 30.455017%, 30.055237%)"
            offset="0.886719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(29.875183%, 29.875183%, 29.473877%)"
            offset="0.890625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(29.014587%, 29.014587%, 28.797913%)"
            offset="0.894531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(28.155518%, 28.155518%, 28.123474%)"
            offset="0.898438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(27.601624%, 27.601624%, 27.386475%)"
            offset="0.902344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(27.049255%, 27.049255%, 26.649475%)"
            offset="0.90625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(26.467896%, 26.467896%, 26.068115%)"
            offset="0.910156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(25.886536%, 25.886536%, 25.486755%)"
            offset="0.914062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(25.105286%, 25.105286%, 24.705505%)"
            offset="0.917969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(24.324036%, 24.324036%, 23.924255%)"
            offset="0.921875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(23.727417%, 23.727417%, 23.342896%)"
            offset="0.925781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(23.130798%, 23.130798%, 22.761536%)"
            offset="0.929688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(22.415161%, 22.415161%, 22.03064%)"
            offset="0.933594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(21.699524%, 21.699524%, 21.299744%)"
            offset="0.9375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(21.017456%, 21.017456%, 20.617676%)"
            offset="0.941406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(20.336914%, 20.336914%, 19.937134%)"
            offset="0.945312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(19.755554%, 19.755554%, 19.355774%)"
            offset="0.949219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(19.174194%, 19.174194%, 18.774414%)"
            offset="0.953125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(18.392944%, 18.392944%, 18.041992%)"
            offset="0.957031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(17.611694%, 17.611694%, 17.311096%)"
            offset="0.960937"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(17.066956%, 17.066956%, 16.717529%)"
            offset="0.964844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(16.523743%, 16.523743%, 16.123962%)"
            offset="0.96875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(15.7547%, 15.7547%, 15.354919%)"
            offset="0.972656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(14.987183%, 14.987183%, 14.587402%)"
            offset="0.976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(14.305115%, 14.305115%, 13.905334%)"
            offset="0.980469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.624573%, 13.624573%, 13.224792%)"
            offset="0.984375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.902832%, 12.902832%, 12.503052%)"
            offset="0.988281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.181091%, 12.181091%, 11.781311%)"
            offset="0.992187"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.590576%, 11.590576%, 11.190796%)"
            offset="0.996094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.000061%, 11.000061%, 10.600281%)"
            offset="1"
          />
        </linearGradient>
        <ClipPath id="04cb77b566">
          <Path
            d="M 114 297 L 148 297 L 148 337.175781 L 114 337.175781 Z M 114 297 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="a119a8c51e">
          <Path
            d="M 145 312 L 194 312 L 194 337.175781 L 145 337.175781 Z M 145 312 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="85052bf413">
          <Path
            d="M 191 297 L 226 297 L 226 337.175781 L 191 337.175781 Z M 191 297 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="e6236939eb">
          <Path
            d="M 117.15625 149.960938 L 133.460938 149.960938 L 133.460938 166.289062 L 117.15625 166.289062 Z M 117.15625 149.960938 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="a12386e052">
          <Path
            d="M 117.15625 158.125 C 117.15625 153.617188 120.804688 149.960938 125.308594 149.960938 C 129.808594 149.960938 133.460938 153.617188 133.460938 158.125 C 133.460938 162.636719 129.808594 166.289062 125.308594 166.289062 C 120.804688 166.289062 117.15625 162.636719 117.15625 158.125 Z M 117.15625 158.125 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="f3552ebfee">
          <Path
            d="M 117.15625 158.125 C 117.15625 153.617188 120.804688 149.960938 125.308594 149.960938 C 129.808594 149.960938 133.460938 153.617188 133.460938 158.125 C 133.460938 162.636719 129.808594 166.289062 125.308594 166.289062 C 120.804688 166.289062 117.15625 162.636719 117.15625 158.125 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 125.307542, 158.126536)"
          gradientUnits="userSpaceOnUse"
          r="8.158551"
          cx="0"
          id="138c2a1f0b"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="90c5e2a545">
          <Path
            d="M 205.816406 150.132812 L 222.121094 150.132812 L 222.121094 166.460938 L 205.816406 166.460938 Z M 205.816406 150.132812 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="e4cc4fc0b6">
          <Path
            d="M 205.816406 158.296875 C 205.816406 153.789062 209.46875 150.132812 213.96875 150.132812 C 218.472656 150.132812 222.121094 153.789062 222.121094 158.296875 C 222.121094 162.804688 218.472656 166.460938 213.96875 166.460938 C 209.46875 166.460938 205.816406 162.804688 205.816406 158.296875 Z M 205.816406 158.296875 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="a689f515be">
          <Path
            d="M 205.816406 158.296875 C 205.816406 153.789062 209.46875 150.132812 213.96875 150.132812 C 218.472656 150.132812 222.121094 153.789062 222.121094 158.296875 C 222.121094 162.804688 218.472656 166.460938 213.96875 166.460938 C 209.46875 166.460938 205.816406 162.804688 205.816406 158.296875 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 213.970149, 158.296616)"
          gradientUnits="userSpaceOnUse"
          r="8.158551"
          cx="0"
          id="d5a8866679"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="cf5ee8bb89">
          <Path
            d="M 145.011719 199.457031 L 155.878906 199.457031 L 155.878906 210.34375 L 145.011719 210.34375 Z M 145.011719 199.457031 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="67513d36ed">
          <Path
            d="M 145.011719 204.902344 C 145.011719 201.894531 147.445312 199.457031 150.445312 199.457031 C 153.449219 199.457031 155.878906 201.894531 155.878906 204.902344 C 155.878906 207.90625 153.449219 210.34375 150.445312 210.34375 C 147.445312 210.34375 145.011719 207.90625 145.011719 204.902344 Z M 145.011719 204.902344 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="90991ad217">
          <Path
            d="M 145.011719 204.902344 C 145.011719 201.894531 147.445312 199.457031 150.445312 199.457031 C 153.449219 199.457031 155.878906 201.894531 155.878906 204.902344 C 155.878906 207.90625 153.449219 210.34375 150.445312 210.34375 C 147.445312 210.34375 145.011719 207.90625 145.011719 204.902344 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 150.445588, 204.900725)"
          gradientUnits="userSpaceOnUse"
          r="5.439034"
          cx="0"
          id="2e326d25cc"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="18f0bd2e62">
          <Path
            d="M 183.058594 199.457031 L 193.925781 199.457031 L 193.925781 210.34375 L 183.058594 210.34375 Z M 183.058594 199.457031 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="8118a2ffb9">
          <Path
            d="M 183.058594 204.902344 C 183.058594 201.894531 185.492188 199.457031 188.492188 199.457031 C 191.496094 199.457031 193.925781 201.894531 193.925781 204.902344 C 193.925781 207.90625 191.496094 210.34375 188.492188 210.34375 C 185.492188 210.34375 183.058594 207.90625 183.058594 204.902344 Z M 183.058594 204.902344 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="ad71cc4394">
          <Path
            d="M 183.058594 204.902344 C 183.058594 201.894531 185.492188 199.457031 188.492188 199.457031 C 191.496094 199.457031 193.925781 201.894531 193.925781 204.902344 C 193.925781 207.90625 191.496094 210.34375 188.492188 210.34375 C 185.492188 210.34375 183.058594 207.90625 183.058594 204.902344 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 188.49239, 204.900725)"
          gradientUnits="userSpaceOnUse"
          r="5.439034"
          cx="0"
          id="42cfc0af9e"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="96f55ca4cd">
          <Path
            d="M 137.535156 232.113281 L 148.40625 232.113281 L 148.40625 243 L 137.535156 243 Z M 137.535156 232.113281 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="07c9bb76ae">
          <Path
            d="M 137.535156 237.558594 C 137.535156 234.550781 139.96875 232.113281 142.972656 232.113281 C 145.972656 232.113281 148.40625 234.550781 148.40625 237.558594 C 148.40625 240.5625 145.972656 243 142.972656 243 C 139.96875 243 137.535156 240.5625 137.535156 237.558594 Z M 137.535156 237.558594 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="465a9d52cd">
          <Path
            d="M 137.535156 237.558594 C 137.535156 234.550781 139.96875 232.113281 142.972656 232.113281 C 145.972656 232.113281 148.40625 234.550781 148.40625 237.558594 C 148.40625 240.5625 145.972656 243 142.972656 243 C 139.96875 243 137.535156 240.5625 137.535156 237.558594 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 142.972123, 237.557613)"
          gradientUnits="userSpaceOnUse"
          r="5.439034"
          cx="0"
          id="274c02dcec"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="f12a1a5f94">
          <Path
            d="M 192.570312 231.433594 L 203.4375 231.433594 L 203.4375 242.320312 L 192.570312 242.320312 Z M 192.570312 231.433594 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="94f97cc60a">
          <Path
            d="M 192.570312 236.878906 C 192.570312 233.871094 195.003906 231.433594 198.003906 231.433594 C 201.007812 231.433594 203.4375 233.871094 203.4375 236.878906 C 203.4375 239.882812 201.007812 242.320312 198.003906 242.320312 C 195.003906 242.320312 192.570312 239.882812 192.570312 236.878906 Z M 192.570312 236.878906 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="a4885e0b6e">
          <Path
            d="M 192.570312 236.878906 C 192.570312 233.871094 195.003906 231.433594 198.003906 231.433594 C 201.007812 231.433594 203.4375 233.871094 203.4375 236.878906 C 203.4375 239.882812 201.007812 242.320312 198.003906 242.320312 C 195.003906 242.320312 192.570312 239.882812 192.570312 236.878906 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 198.00409, 236.877254)"
          gradientUnits="userSpaceOnUse"
          r="5.439034"
          cx="0"
          id="409fd0c4d8"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="65581332e2">
          <Path
            d="M 165.5625 283.992188 L 176.433594 283.992188 L 176.433594 294.878906 L 165.5625 294.878906 Z M 165.5625 283.992188 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="e4ae81585b">
          <Path
            d="M 165.5625 289.433594 C 165.5625 286.425781 167.996094 283.992188 170.996094 283.992188 C 174 283.992188 176.433594 286.425781 176.433594 289.433594 C 176.433594 292.441406 174 294.878906 170.996094 294.878906 C 167.996094 294.878906 165.5625 292.441406 165.5625 289.433594 Z M 165.5625 289.433594 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="bf297c21ab">
          <Path
            d="M 165.5625 289.433594 C 165.5625 286.425781 167.996094 283.992188 170.996094 283.992188 C 174 283.992188 176.433594 286.425781 176.433594 289.433594 C 176.433594 292.441406 174 294.878906 170.996094 294.878906 C 167.996094 294.878906 165.5625 292.441406 165.5625 289.433594 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 170.99765, 289.434413)"
          gradientUnits="userSpaceOnUse"
          r="5.439034"
          cx="0"
          id="4c3fd74780"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="3cdc30098f">
          <Path
            d="M 117.832031 122.578125 L 128.703125 122.578125 L 128.703125 133.464844 L 117.832031 133.464844 Z M 117.832031 122.578125 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="80f52fa364">
          <Path
            d="M 117.832031 128.019531 C 117.832031 125.015625 120.265625 122.578125 123.269531 122.578125 C 126.269531 122.578125 128.703125 125.015625 128.703125 128.019531 C 128.703125 131.027344 126.269531 133.464844 123.269531 133.464844 C 120.265625 133.464844 117.832031 131.027344 117.832031 128.019531 Z M 117.832031 128.019531 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="f2195dd010">
          <Path
            d="M 117.832031 128.019531 C 117.832031 125.015625 120.265625 122.578125 123.269531 122.578125 C 126.269531 122.578125 128.703125 125.015625 128.703125 128.019531 C 128.703125 131.027344 126.269531 133.464844 123.269531 133.464844 C 120.265625 133.464844 117.832031 131.027344 117.832031 128.019531 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 123.26932, 128.020967)"
          gradientUnits="userSpaceOnUse"
          r="5.439034"
          cx="0"
          id="1f98392e6d"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
        <ClipPath id="c435989b3c">
          <Path
            d="M 208.875 122.578125 L 219.746094 122.578125 L 219.746094 133.464844 L 208.875 133.464844 Z M 208.875 122.578125 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="acccfcdc94">
          <Path
            d="M 208.875 128.019531 C 208.875 125.015625 211.308594 122.578125 214.308594 122.578125 C 217.3125 122.578125 219.746094 125.015625 219.746094 128.019531 C 219.746094 131.027344 217.3125 133.464844 214.308594 133.464844 C 211.308594 133.464844 208.875 131.027344 208.875 128.019531 Z M 208.875 128.019531 "
            clipRule="nonzero"
          />
        </ClipPath>
        <ClipPath id="2c9cd96757">
          <Path
            d="M 208.875 128.019531 C 208.875 125.015625 211.308594 122.578125 214.308594 122.578125 C 217.3125 122.578125 219.746094 125.015625 219.746094 128.019531 C 219.746094 131.027344 217.3125 133.464844 214.308594 133.464844 C 211.308594 133.464844 208.875 131.027344 208.875 128.019531 "
            clipRule="nonzero"
          />
        </ClipPath>
        <radialGradient
          gradientTransform="matrix(0.999305, 0, 0, 1.000695, 214.309839, 128.020967)"
          gradientUnits="userSpaceOnUse"
          r="5.439034"
          cx="0"
          id="84eedfc200"
          cy="0"
          fx="0"
          fy="0"
        >
          <stop
            stopOpacity="1"
            stopColor="rgb(13.674927%, 99.822998%, 99.822998%)"
            offset="0"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.627625%, 99.472046%, 99.472046%)"
            offset="0.0195312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.589478%, 99.191284%, 99.191284%)"
            offset="0.0390625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.560486%, 98.980713%, 98.980713%)"
            offset="0.0507812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.531494%, 98.770142%, 98.770142%)"
            offset="0.0625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.504028%, 98.558044%, 98.558044%)"
            offset="0.0742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.475037%, 98.347473%, 98.347473%)"
            offset="0.0859375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.446045%, 98.136902%, 98.136902%)"
            offset="0.0976562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.417053%, 97.926331%, 97.926331%)"
            offset="0.109375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.389587%, 97.715759%, 97.715759%)"
            offset="0.121094"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.360596%, 97.505188%, 97.505188%)"
            offset="0.132812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.331604%, 97.294617%, 97.294617%)"
            offset="0.144531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.302612%, 97.08252%, 97.08252%)"
            offset="0.15625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.275146%, 96.871948%, 96.871948%)"
            offset="0.167969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.246155%, 96.661377%, 96.661377%)"
            offset="0.179688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.217163%, 96.450806%, 96.450806%)"
            offset="0.191406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.189697%, 96.240234%, 96.240234%)"
            offset="0.203125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.160706%, 96.029663%, 96.029663%)"
            offset="0.214844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.131714%, 95.819092%, 95.819092%)"
            offset="0.226562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.102722%, 95.606995%, 95.606995%)"
            offset="0.238281"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.075256%, 95.396423%, 95.396423%)"
            offset="0.25"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.037109%, 95.115662%, 95.115662%)"
            offset="0.261719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.988281%, 94.764709%, 94.764709%)"
            offset="0.28125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.940979%, 94.413757%, 94.413757%)"
            offset="0.300781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.913513%, 94.20166%, 94.20166%)"
            offset="0.320312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(12.837219%, 93.667603%, 93.667603%)"
            offset="0.324219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(10.658264%, 78.559875%, 78.559875%)"
            offset="0.328125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.671692%, 42.321777%, 42.321777%)"
            offset="0.332031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(1.448059%, 10.736084%, 10.736084%)"
            offset="0.335938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0518799%, 0.390625%, 0.390625%)"
            offset="0.339844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.00915527%, 0.0778198%, 0.0778198%)"
            offset="0.34375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0366211%, 0.315857%, 0.315857%)"
            offset="0.671875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.0747681%, 0.636292%, 0.636292%)"
            offset="0.679688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.112915%, 0.9552%, 0.9552%)"
            offset="0.6875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.151062%, 1.274109%, 1.274109%)"
            offset="0.695312"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.189209%, 1.593018%, 1.593018%)"
            offset="0.703125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.227356%, 1.911926%, 1.911926%)"
            offset="0.710938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.265503%, 2.230835%, 2.230835%)"
            offset="0.71875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.30365%, 2.55127%, 2.55127%)"
            offset="0.726562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.341797%, 2.870178%, 2.870178%)"
            offset="0.734375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.379944%, 3.189087%, 3.189087%)"
            offset="0.742188"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.418091%, 3.507996%, 3.507996%)"
            offset="0.75"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.447083%, 3.747559%, 3.747559%)"
            offset="0.757812"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.465393%, 3.907776%, 3.907776%)"
            offset="0.761719"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.485229%, 4.066467%, 4.066467%)"
            offset="0.765625"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.50354%, 4.226685%, 4.226685%)"
            offset="0.769531"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.523376%, 4.385376%, 4.385376%)"
            offset="0.773438"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.541687%, 4.545593%, 4.545593%)"
            offset="0.777344"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.561523%, 4.705811%, 4.705811%)"
            offset="0.78125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.579834%, 4.864502%, 4.864502%)"
            offset="0.785156"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.59967%, 5.024719%, 5.024719%)"
            offset="0.789062"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.617981%, 5.183411%, 5.183411%)"
            offset="0.792969"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.636292%, 5.343628%, 5.343628%)"
            offset="0.796875"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.656128%, 5.503845%, 5.503845%)"
            offset="0.800781"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.674438%, 5.662537%, 5.662537%)"
            offset="0.804688"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.694275%, 5.822754%, 5.822754%)"
            offset="0.808594"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.712585%, 5.981445%, 5.981445%)"
            offset="0.8125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.741577%, 6.221008%, 6.221008%)"
            offset="0.816406"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.770569%, 6.460571%, 6.460571%)"
            offset="0.824219"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(0.799561%, 6.697083%, 6.697083%)"
            offset="0.828125"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(2.139282%, 16.423035%, 16.423035%)"
            offset="0.832031"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(5.207825%, 38.012695%, 38.012695%)"
            offset="0.835938"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(8.668518%, 62.281799%, 62.281799%)"
            offset="0.839844"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(11.540222%, 83.540344%, 83.540344%)"
            offset="0.84375"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.156128%, 95.953369%, 95.953369%)"
            offset="0.847656"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.65509%, 99.676514%, 99.676514%)"
            offset="0.851562"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="0.855469"
          />
          <stop
            stopOpacity="1"
            stopColor="rgb(13.699341%, 100%, 100%)"
            offset="1"
          />
        </radialGradient>
      </Defs>
      <G clip-path="url(#008995b6a5)">
        <G clip-path="url(#cd3ec1e450)">
          <G clip-path="url(#c52d204ccb)">
            <Path
              fill="url(#f6737e0006)"
              d="M 72.644531 26.726562 L 72.644531 337.175781 L 266.886719 337.175781 L 266.886719 26.726562 Z M 72.644531 26.726562 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <Path
        fill="#231f20"
        d="M 156.296875 154.253906 L 143.765625 146.058594 L 138.515625 152.800781 L 146.003906 158.378906 L 156.296875 154.253906 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 159.003906 153.683594 L 158.933594 153.792969 L 163.574219 148.484375 L 150.265625 137.710938 L 144.96875 144.507812 L 159.003906 153.683594 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 126.511719 149.375 L 136.882812 151.710938 L 142.121094 144.984375 L 126.175781 141.671875 L 126.511719 149.375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 169.765625 93.710938 L 144.535156 95.769531 L 151.25 134.582031 L 169.765625 129.949219 L 188.277344 134.582031 L 194.992188 95.769531 L 169.765625 93.710938 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 126.085938 139.652344 L 143.273438 143.246094 L 148.539062 136.746094 L 125.648438 129.503906 L 126.085938 139.652344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 116.035156 152.515625 L 112.113281 159.324219 L 142.265625 158.308594 L 136.425781 153.632812 L 124.558594 150.9375 L 116.035156 152.515625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 144.710938 246.539062 L 140.738281 237.988281 L 140.730469 238.035156 L 133.011719 236.898438 L 140.289062 249.652344 L 144.710938 246.539062 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 206.519531 236.898438 L 198.800781 238.035156 L 198.792969 237.988281 L 194.816406 246.539062 L 199.242188 249.652344 L 206.519531 236.898438 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 174.328125 149.589844 L 178.726562 201.863281 L 188.144531 204.613281 L 179.210938 155.183594 L 174.328125 149.589844 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 201.792969 220.347656 L 194.410156 233.429688 L 198.660156 236.074219 L 207.453125 234.785156 L 201.792969 220.347656 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 179.929688 213.882812 L 186.765625 228.667969 L 192.746094 232.394531 L 200.582031 218.511719 L 189.132812 207.179688 L 179.929688 213.882812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 139.15625 251.613281 L 130.574219 236.570312 L 130.613281 236.546875 L 118.757812 234.804688 L 132.199219 263.6875 L 139.15625 251.613281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 116.273438 211.84375 L 137.628906 217.039062 L 137.648438 217.046875 L 142.410156 212.273438 L 122.359375 192.769531 L 116.273438 211.84375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 132.074219 234.785156 L 140.871094 236.074219 L 145.121094 233.429688 L 137.738281 220.347656 L 132.074219 234.785156 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 117.652344 232.429688 L 130.089844 234.492188 L 136.339844 218.558594 L 116.15625 213.828125 L 117.652344 232.429688 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 147.757812 273.652344 L 148.957031 257.429688 L 140.472656 253.621094 L 133.171875 265.902344 L 144.578125 286.503906 L 147.757812 273.652344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 132.726562 269.269531 L 132.726562 278.574219 L 142.699219 287.050781 Z M 132.726562 269.269531 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 103.289062 133.429688 L 109.761719 142.59375 L 124.113281 139.214844 L 123.679688 129.234375 L 103.289062 133.429688 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 111.300781 144.773438 L 115.601562 150.605469 L 124.398438 148.972656 L 124.210938 141.515625 L 111.300781 144.773438 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 116.164062 164.925781 L 137.910156 164.296875 L 137.910156 164.332031 L 143.957031 160.214844 L 112.734375 161.265625 L 116.164062 164.925781 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 109.824219 171.097656 L 142.003906 169.289062 L 155.128906 156.953125 L 146.890625 160.585938 L 138.632812 166.210938 L 115.484375 166.90625 L 110.136719 161.351562 L 109.945312 161.359375 L 109.945312 161.328125 L 104.542969 161.042969 L 109.824219 171.097656 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 109.835938 159.363281 L 114.042969 152.054688 L 110.386719 146.871094 L 105.054688 159.109375 L 109.835938 159.363281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 143.792969 210.890625 L 149.140625 205.535156 L 158.003906 156.984375 L 123.152344 190.285156 L 143.792969 210.890625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 169.765625 131.964844 L 151.828125 136.457031 L 165.472656 147.285156 L 169.765625 147.308594 L 174.054688 147.285156 L 187.703125 136.457031 L 169.765625 131.964844 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 201.617188 164.332031 L 201.621094 164.296875 L 223.367188 164.925781 L 226.796875 161.265625 L 195.570312 160.214844 L 201.617188 164.332031 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 196.253906 143.246094 L 213.441406 139.652344 L 213.882812 129.503906 L 190.992188 136.746094 L 196.253906 143.246094 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 213.019531 149.375 L 213.355469 141.671875 L 197.410156 144.984375 L 202.648438 151.710938 L 213.019531 149.375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 175.957031 148.484375 L 180.59375 153.792969 L 180.527344 153.683594 L 194.558594 144.507812 L 189.261719 137.710938 L 175.957031 148.484375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 183.230469 154.253906 L 193.523438 158.378906 L 201.015625 152.800781 L 195.765625 146.058594 L 183.230469 154.253906 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 193.351562 247.914062 L 146.175781 247.914062 L 141.285156 251.839844 L 150.355469 255.914062 L 163.683594 260.234375 L 175.847656 260.234375 L 189.171875 255.914062 L 198.246094 251.839844 L 193.351562 247.914062 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 215.851562 129.234375 L 215.417969 139.214844 L 229.769531 142.59375 L 236.242188 133.429688 L 215.851562 129.234375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 239.539062 132.097656 L 249.082031 132.585938 L 242.132812 78.039062 L 238.25 87.25 L 239.539062 132.097656 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 203.105469 153.632812 L 197.265625 158.308594 L 227.417969 159.324219 L 223.492188 152.515625 L 214.972656 150.9375 L 203.105469 153.632812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 176.226562 262.679688 L 162.867188 262.519531 L 151.054688 258.617188 L 149.902344 273.511719 L 169.765625 278.289062 L 189.789062 273.347656 L 188.773438 258.273438 L 176.226562 262.679688 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 215.128906 148.972656 L 223.929688 150.605469 L 228.230469 144.773438 L 215.316406 141.515625 L 215.128906 148.972656 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 229.691406 159.363281 L 234.476562 159.109375 L 229.144531 146.871094 L 225.484375 152.054688 L 229.691406 159.363281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 162.664062 214.875 L 161.773438 228.253906 L 177.757812 228.253906 L 176.867188 214.875 L 162.664062 214.875 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 162.460938 203.902344 L 162.074219 212.917969 L 177.453125 212.917969 L 177.070312 203.902344 L 162.460938 203.902344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 167.1875 149.285156 L 162.867188 201.902344 L 176.664062 201.902344 L 172.339844 149.285156 L 167.1875 149.285156 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 151.386719 204.613281 L 160.800781 201.863281 L 165.203125 149.589844 L 160.316406 155.183594 L 151.386719 204.613281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 190.230469 275.257812 L 169.765625 280.304688 L 149.296875 275.257812 L 145.953125 288.859375 L 193.574219 288.859375 L 190.230469 275.257812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 138.945312 218.511719 L 146.78125 232.394531 L 152.765625 228.667969 L 159.601562 213.882812 L 150.398438 207.179688 L 138.945312 218.511719 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 160.136719 211.851562 L 160.242188 204.0625 L 152.53125 206.316406 Z M 160.136719 211.851562 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 144.554688 236.085938 L 194.972656 236.085938 L 185.542969 230.210938 L 153.988281 230.210938 L 144.554688 236.085938 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 179.285156 204.0625 L 179.394531 211.851562 L 186.996094 206.316406 Z M 179.285156 204.0625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 147.109375 245.953125 L 192.417969 245.953125 L 195.972656 238.042969 L 143.558594 238.042969 L 147.109375 245.953125 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 179.71875 228.253906 L 184.417969 228.253906 L 178.925781 216.375 Z M 179.71875 228.253906 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 159.8125 228.253906 L 160.605469 216.375 L 155.109375 228.253906 Z M 159.8125 228.253906 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 197.21875 96.28125 L 190.613281 134.46875 L 214.527344 126.628906 L 237.234375 131.300781 L 236.515625 106.339844 L 197.21875 96.28125 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 101.277344 87.25 L 97.394531 78.039062 L 90.445312 132.585938 L 99.992188 132.097656 L 101.277344 87.25 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 135.941406 61.207031 L 132.9375 36.570312 L 110.660156 48.511719 L 98.207031 75.050781 L 102.726562 85.007812 L 135.941406 61.207031 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 89.914062 146.78125 L 75.390625 143.582031 L 87.347656 168.375 L 87.925781 193.640625 L 88.074219 207.289062 L 95.953125 210.445312 L 90.367188 159.507812 L 89.914062 146.78125 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 74.71875 146.675781 L 74.71875 158.894531 L 86 188.824219 L 85.472656 168.890625 L 74.71875 146.675781 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 103.117188 211.253906 L 102.746094 183.898438 L 92.816406 160.65625 L 98.007812 211.269531 L 113.164062 243.039062 L 103.117188 211.253906 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 201.402344 60.042969 L 204.6875 36.023438 L 169.765625 28.726562 L 134.84375 36.023438 L 138.128906 60.042969 L 201.402344 60.042969 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 234.789062 185.597656 L 218.75 191.230469 L 218.738281 191.246094 L 225.171875 211.421875 L 234.199219 210.070312 L 234.789062 185.597656 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 225.371094 213.367188 L 223.746094 233.554688 L 209.269531 264.152344 L 220.492188 255.582031 L 234.105469 212.066406 L 225.371094 213.367188 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 237.261719 160.921875 L 231.121094 173.308594 L 199.398438 171.355469 L 218.128906 189.257812 L 234.695312 183.554688 L 244.636719 160.535156 L 237.261719 160.921875 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 236.804688 85.007812 L 241.320312 75.050781 L 228.867188 48.511719 L 206.589844 36.570312 L 203.589844 61.207031 L 236.804688 85.007812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 248.902344 134.539062 L 239.875 134.074219 L 246.46875 158.378906 Z M 248.902344 134.539062 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 253.53125 188.824219 L 264.808594 158.894531 L 264.808594 146.675781 L 254.054688 168.890625 L 253.53125 188.824219 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 249.617188 146.78125 L 249.160156 159.507812 L 243.578125 210.445312 L 251.457031 207.289062 L 251.605469 193.640625 L 252.183594 168.375 L 264.140625 143.582031 L 249.617188 146.78125 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 223.429688 263.207031 L 238.328125 223 L 222.769531 255.902344 Z M 223.429688 263.207031 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 236.785156 183.898438 L 236.414062 211.253906 L 226.363281 243.039062 L 241.519531 211.269531 L 246.714844 160.65625 L 236.785156 183.898438 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 208.761719 266.933594 L 208.761719 276.914062 L 221.710938 265.902344 L 221.003906 258.09375 L 208.761719 266.933594 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 116.761719 255.902344 L 101.199219 223 L 116.097656 263.207031 Z M 116.761719 255.902344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 111.105469 291.730469 L 104.214844 315.589844 L 112.363281 320.625 L 120.394531 297.117188 L 111.105469 291.730469 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 219.136719 297.117188 L 227.167969 320.625 L 235.3125 315.589844 L 228.421875 291.730469 L 219.136719 297.117188 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <G clip-path="url(#04cb77b566)">
        <Path
          fill="#231f20"
          d="M 122.335938 297.964844 L 114.070312 321.679688 L 143.84375 340.546875 L 147.796875 312.199219 L 122.335938 297.964844 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </G>
      <G clip-path="url(#a119a8c51e)">
        <Path
          fill="#231f20"
          d="M 149.914062 312.894531 L 145.8125 341.257812 L 193.714844 341.257812 L 189.617188 312.894531 L 149.914062 312.894531 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </G>
      <G clip-path="url(#85052bf413)">
        <Path
          fill="#231f20"
          d="M 191.734375 312.199219 L 195.683594 340.546875 L 225.460938 321.679688 L 217.191406 297.964844 L 191.734375 312.199219 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </G>
      <Path
        fill="#231f20"
        d="M 121.402344 189.257812 L 140.128906 171.355469 L 108.40625 173.308594 L 102.269531 160.921875 L 94.894531 160.535156 L 104.835938 183.554688 L 121.402344 189.257812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 234.988281 161.042969 L 229.582031 161.328125 L 229.582031 161.359375 L 229.394531 161.351562 L 224.046875 166.90625 L 200.898438 166.210938 L 192.640625 160.585938 L 184.402344 156.953125 L 197.527344 169.289062 L 229.703125 171.097656 L 234.988281 161.042969 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 203.019531 63.609375 L 197.496094 94.175781 L 236.449219 103.972656 L 235.96875 87.316406 L 203.019531 63.609375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 244.496094 158.582031 L 237.941406 134.410156 L 230.683594 144.691406 L 236.910156 158.980469 L 244.496094 158.582031 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 102.296875 131.300781 L 125 126.628906 L 148.914062 134.46875 L 142.308594 96.28125 L 103.011719 106.339844 L 102.296875 131.300781 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 103.558594 87.316406 L 103.082031 103.972656 L 142.03125 94.175781 L 136.507812 63.609375 L 103.558594 87.316406 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 144.226562 93.503906 L 169.765625 91.421875 L 195.300781 93.503906 L 200.941406 62.289062 L 138.585938 62.289062 L 144.226562 93.503906 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 190.386719 205.535156 L 195.734375 210.890625 L 216.378906 190.285156 L 181.523438 156.984375 L 190.386719 205.535156 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 206.804688 269.269531 L 196.832031 287.050781 L 206.804688 278.574219 Z M 206.804688 269.269531 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 220.769531 234.804688 L 208.914062 236.546875 L 208.957031 236.570312 L 200.375 251.613281 L 207.328125 263.6875 L 220.769531 234.804688 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 227.871094 256.855469 L 224.015625 267.265625 L 219.167969 294.449219 L 227.816406 289.628906 L 227.871094 256.855469 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 223.375 213.828125 L 203.191406 218.558594 L 209.441406 234.492188 L 221.875 232.429688 L 223.375 213.828125 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 197.117188 212.273438 L 201.882812 217.046875 L 201.898438 217.039062 L 223.253906 211.84375 L 217.167969 192.769531 L 197.117188 212.273438 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 147.425781 309.527344 L 143.171875 290.019531 L 117.957031 268.585938 L 122.550781 295.667969 L 147.425781 309.527344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 95.035156 158.582031 L 102.621094 158.980469 L 108.847656 144.691406 L 101.589844 134.410156 L 95.035156 158.582031 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 189.777344 310.527344 L 193.683594 290.84375 L 145.84375 290.84375 L 149.75 310.527344 L 189.777344 310.527344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 221.574219 268.585938 L 196.359375 290.019531 L 192.101562 309.527344 L 216.976562 295.667969 L 221.574219 268.585938 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 130.769531 266.933594 L 118.527344 258.09375 L 117.816406 265.902344 L 130.769531 276.914062 L 130.769531 266.933594 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 111.660156 256.855469 L 111.714844 289.628906 L 120.363281 294.449219 L 115.515625 267.265625 L 111.660156 256.855469 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 206.355469 265.902344 L 199.058594 253.621094 L 190.570312 257.429688 L 191.773438 273.652344 L 194.949219 286.503906 L 206.355469 265.902344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 93.0625 158.378906 L 99.65625 134.074219 L 90.628906 134.539062 Z M 93.0625 158.378906 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 130.257812 264.152344 L 115.78125 233.554688 L 114.15625 213.367188 L 105.421875 212.066406 L 119.039062 255.582031 L 130.257812 264.152344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#231f20"
        d="M 114.359375 211.421875 L 120.792969 191.246094 L 120.78125 191.230469 L 104.742188 185.597656 L 105.332031 210.070312 L 114.359375 211.421875 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 213.589844 129.941406 L 122.878906 129.941406 L 122.878906 128.070312 L 213.589844 128.070312 L 213.589844 129.941406 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 214.523438 158.097656 L 212.65625 158.097656 L 212.65625 128.496094 L 214.523438 128.496094 L 214.523438 158.097656 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 189.949219 205.996094 L 188.304688 205.113281 L 213.277344 158.671875 L 214.921875 159.558594 L 189.949219 205.996094 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 197.402344 237.960938 L 188.230469 205.8125 L 190.027344 205.296875 L 199.199219 237.445312 L 197.402344 237.960938 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 171.613281 290.699219 L 169.953125 289.835938 L 197.472656 236.761719 L 199.128906 237.625 L 171.613281 290.699219 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 169.449219 290.710938 L 141.933594 239.679688 L 143.574219 238.789062 L 171.09375 289.824219 L 169.449219 290.710938 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 143.667969 238.914062 L 141.839844 238.535156 L 148.464844 206.386719 L 150.292969 206.765625 L 143.667969 238.914062 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 149.050781 206.988281 L 124.589844 156.976562 L 126.265625 156.152344 L 150.726562 206.164062 L 149.050781 206.988281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 126.363281 156.566406 L 124.492188 156.566406 L 124.492188 127.476562 L 126.363281 127.476562 L 126.363281 156.566406 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 97.210938 211.59375 L 95.546875 210.742188 L 123.574219 155.628906 L 125.242188 156.480469 L 97.210938 211.59375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 141.777344 238.515625 L 95.914062 211.976562 L 96.847656 210.359375 L 142.710938 236.894531 L 141.777344 238.515625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 198.273438 238.507812 L 197.3125 236.902344 L 243.175781 209.34375 L 244.136719 210.949219 L 198.273438 238.507812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 243.363281 210.625 L 212.277344 158.0625 L 213.882812 157.109375 L 244.96875 209.671875 L 243.363281 210.625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <Path
        fill="#079697"
        d="M 188.109375 205.46875 L 150.398438 205.46875 L 150.398438 203.601562 L 188.109375 203.601562 L 188.109375 205.46875 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <G clip-path="url(#e6236939eb)">
        <G clip-path="url(#a12386e052)">
          <G clip-path="url(#f3552ebfee)">
            <Path
              fill="url(#138c2a1f0b)"
              d="M 117.15625 149.960938 L 117.15625 166.289062 L 133.460938 166.289062 L 133.460938 149.960938 Z M 117.15625 149.960938 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#90c5e2a545)">
        <G clip-path="url(#e4cc4fc0b6)">
          <G clip-path="url(#a689f515be)">
            <Path
              fill="url(#d5a8866679)"
              d="M 205.816406 150.132812 L 205.816406 166.460938 L 222.121094 166.460938 L 222.121094 150.132812 Z M 205.816406 150.132812 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#cf5ee8bb89)">
        <G clip-path="url(#67513d36ed)">
          <G clip-path="url(#90991ad217)">
            <Path
              fill="url(#2e326d25cc)"
              d="M 145.011719 199.457031 L 145.011719 210.34375 L 155.878906 210.34375 L 155.878906 199.457031 Z M 145.011719 199.457031 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#18f0bd2e62)">
        <G clip-path="url(#8118a2ffb9)">
          <G clip-path="url(#ad71cc4394)">
            <Path
              fill="url(#42cfc0af9e)"
              d="M 183.058594 199.457031 L 183.058594 210.34375 L 193.925781 210.34375 L 193.925781 199.457031 Z M 183.058594 199.457031 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#96f55ca4cd)">
        <G clip-path="url(#07c9bb76ae)">
          <G clip-path="url(#465a9d52cd)">
            <Path
              fill="url(#274c02dcec)"
              d="M 137.535156 232.113281 L 137.535156 243 L 148.40625 243 L 148.40625 232.113281 Z M 137.535156 232.113281 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#f12a1a5f94)">
        <G clip-path="url(#94f97cc60a)">
          <G clip-path="url(#a4885e0b6e)">
            <Path
              fill="url(#409fd0c4d8)"
              d="M 192.570312 231.433594 L 192.570312 242.320312 L 203.4375 242.320312 L 203.4375 231.433594 Z M 192.570312 231.433594 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#65581332e2)">
        <G clip-path="url(#e4ae81585b)">
          <G clip-path="url(#bf297c21ab)">
            <Path
              fill="url(#4c3fd74780)"
              d="M 165.5625 283.992188 L 165.5625 294.878906 L 176.433594 294.878906 L 176.433594 283.992188 Z M 165.5625 283.992188 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#3cdc30098f)">
        <G clip-path="url(#80f52fa364)">
          <G clip-path="url(#f2195dd010)">
            <Path
              fill="url(#1f98392e6d)"
              d="M 117.832031 122.578125 L 117.832031 133.464844 L 128.703125 133.464844 L 128.703125 122.578125 Z M 117.832031 122.578125 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
      <G clip-path="url(#c435989b3c)">
        <G clip-path="url(#acccfcdc94)">
          <G clip-path="url(#2c9cd96757)">
            <Path
              fill="url(#84eedfc200)"
              d="M 208.875 122.578125 L 208.875 133.464844 L 219.746094 133.464844 L 219.746094 122.578125 Z M 208.875 122.578125 "
              fillRule="nonzero"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
