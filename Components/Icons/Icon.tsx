import React, { FC } from 'react';

interface IconProps {
  size?: number;
  width?: number;
  color?: string;
}

export const Icon: FC<IconProps> = (props) => {
    let ratio = 375 / 375;
    let size = props.size || props.width || 375;
    let width = size;
    let height = size * ratio;
    let color = props.color || "#757575";
    return (
     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  
     width={width} height={height} zoomAndPan="magnify" viewBox="0 0 375 374.999991" 
      preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath
       id="175ff87af0"><path d="M 0 0 L 374.25 0 L 374.25 375 L 0 375 Z M 0 0 " 
       clipRule="nonzero"/></clipPath></defs><g clipPath="url(#175ff87af0)">
        <path fill="#ffffff"
        d="M 373.363281 191.632812 L 295.316406 139.996094 L 370.382812 165.03125 C 370.554688 165.089844 370.730469 165.117188 370.910156 165.117188 C 371.109375 165.117188 371.300781 165.085938 371.488281 165.015625 C 371.675781 164.949219 371.847656 164.851562 372 164.722656 C 372.152344 164.59375 372.277344 164.445312 372.375 164.273438 C 372.472656 164.097656 372.539062 163.914062 372.570312 163.71875 C 372.601562 163.519531 372.601562 163.324219 372.5625 163.128906 C 372.523438 162.933594 372.453125 162.75 372.351562 162.582031 C 372.246094 162.410156 372.117188 162.265625 371.960938 162.140625 C 371.804688 162.015625 371.632812 161.921875 371.445312 161.863281 L 294.164062 136.132812 L 364.6875 136.132812 C 364.910156 136.132812 365.125 136.089844 365.328125 136.003906 C 365.53125 135.917969 365.714844 135.796875 365.871094 135.640625 C 366.027344 135.484375 366.148438 135.304688 366.230469 135.101562 C 366.316406 134.894531 366.359375 134.683594 366.359375 134.460938 C 366.359375 134.242188 366.316406 134.027344 366.230469 133.824219 C 366.148438 133.617188 366.027344 133.4375 365.871094 133.28125 C 365.714844 133.125 365.53125 133.003906 365.328125 132.917969 C 365.125 132.835938 364.910156 132.792969 364.6875 132.792969 L 292.652344 132.792969 L 354.535156 108.390625 C 354.738281 108.308594 354.921875 108.1875 355.078125 108.035156 C 355.238281 107.878906 355.359375 107.703125 355.445312 107.5 C 355.53125 107.296875 355.578125 107.085938 355.582031 106.867188 C 355.585938 106.644531 355.546875 106.433594 355.464844 106.226562 C 355.382812 106.023438 355.265625 105.839844 355.113281 105.683594 C 354.960938 105.523438 354.78125 105.398438 354.582031 105.3125 C 354.378906 105.222656 354.167969 105.175781 353.945312 105.171875 C 353.726562 105.167969 353.511719 105.203125 353.308594 105.285156 L 291.066406 129.828125 L 340.046875 82.476562 C 340.21875 82.324219 340.355469 82.144531 340.453125 81.941406 C 340.550781 81.734375 340.601562 81.515625 340.613281 81.289062 C 340.621094 81.0625 340.585938 80.839844 340.503906 80.628906 C 340.421875 80.414062 340.300781 80.226562 340.144531 80.0625 C 339.984375 79.898438 339.800781 79.773438 339.589844 79.683594 C 339.378906 79.597656 339.160156 79.554688 338.929688 79.554688 C 338.703125 79.554688 338.484375 79.601562 338.273438 79.695312 C 338.066406 79.785156 337.882812 79.914062 337.726562 80.082031 L 289.296875 126.867188 L 321.476562 59.125 C 321.558594 58.925781 321.601562 58.71875 321.601562 58.507812 C 321.605469 58.292969 321.566406 58.085938 321.492188 57.886719 C 321.414062 57.6875 321.300781 57.507812 321.15625 57.351562 C 321.011719 57.195312 320.839844 57.070312 320.648438 56.980469 C 320.453125 56.890625 320.25 56.835938 320.039062 56.824219 C 319.824219 56.808594 319.617188 56.835938 319.414062 56.902344 C 319.210938 56.96875 319.027344 57.070312 318.863281 57.207031 C 318.699219 57.34375 318.566406 57.507812 318.464844 57.695312 L 287.09375 123.738281 L 299.316406 39.109375 C 299.347656 38.886719 299.335938 38.667969 299.28125 38.453125 C 299.226562 38.234375 299.132812 38.039062 298.996094 37.859375 C 298.863281 37.679688 298.699219 37.53125 298.507812 37.417969 C 298.3125 37.304688 298.105469 37.230469 297.886719 37.199219 C 297.664062 37.167969 297.445312 37.179688 297.226562 37.238281 C 297.011719 37.292969 296.8125 37.386719 296.632812 37.523438 C 296.453125 37.65625 296.308594 37.820312 296.195312 38.011719 C 296.082031 38.207031 296.007812 38.414062 295.976562 38.632812 L 284.121094 120.765625 L 274.199219 22.960938 C 274.175781 22.738281 274.113281 22.53125 274.007812 22.335938 C 273.902344 22.140625 273.765625 21.96875 273.59375 21.828125 C 273.421875 21.6875 273.226562 21.585938 273.015625 21.523438 C 272.800781 21.457031 272.582031 21.4375 272.363281 21.457031 C 272.140625 21.480469 271.933594 21.542969 271.734375 21.648438 C 271.539062 21.753906 271.371094 21.894531 271.230469 22.066406 C 271.089844 22.238281 270.988281 22.429688 270.921875 22.644531 C 270.859375 22.855469 270.835938 23.074219 270.859375 23.292969 L 280.5625 118.328125 L 246.804688 11.09375 C 246.746094 10.871094 246.648438 10.671875 246.507812 10.488281 C 246.367188 10.308594 246.195312 10.160156 245.996094 10.050781 C 245.796875 9.941406 245.582031 9.871094 245.355469 9.851562 C 245.125 9.828125 244.902344 9.847656 244.683594 9.917969 C 244.464844 9.988281 244.269531 10.097656 244.097656 10.246094 C 243.921875 10.394531 243.785156 10.574219 243.683594 10.777344 C 243.585938 10.984375 243.527344 11.203125 243.519531 11.429688 C 243.507812 11.660156 243.542969 11.878906 243.621094 12.09375 L 276.539062 116.695312 L 217.886719 3.773438 C 217.785156 3.578125 217.648438 3.40625 217.476562 3.265625 C 217.308594 3.121094 217.117188 3.019531 216.90625 2.953125 C 216.695312 2.886719 216.476562 2.863281 216.257812 2.882812 C 216.035156 2.898438 215.828125 2.960938 215.628906 3.0625 C 215.433594 3.164062 215.261719 3.300781 215.121094 3.472656 C 214.976562 3.640625 214.871094 3.832031 214.804688 4.042969 C 214.738281 4.253906 214.714844 4.46875 214.734375 4.691406 C 214.75 4.910156 214.8125 5.121094 214.914062 5.316406 L 272.402344 115.984375 L 188.175781 1.195312 C 188.050781 1 187.894531 0.839844 187.703125 0.710938 C 187.511719 0.582031 187.304688 0.496094 187.078125 0.453125 C 186.851562 0.414062 186.625 0.417969 186.398438 0.46875 C 186.175781 0.519531 185.96875 0.613281 185.785156 0.75 C 185.597656 0.886719 185.445312 1.054688 185.332031 1.253906 C 185.214844 1.449219 185.140625 1.664062 185.113281 1.894531 C 185.085938 2.121094 185.105469 2.347656 185.167969 2.566406 C 185.234375 2.789062 185.339844 2.988281 185.488281 3.164062 L 271.492188 120.347656 L 149.917969 4.910156 C 149.757812 4.757812 149.570312 4.640625 149.363281 4.5625 C 149.15625 4.484375 148.941406 4.445312 148.722656 4.453125 C 148.5 4.457031 148.289062 4.507812 148.085938 4.597656 C 147.882812 4.6875 147.707031 4.8125 147.554688 4.976562 C 147.402344 5.136719 147.285156 5.320312 147.207031 5.523438 C 147.128906 5.730469 147.09375 5.945312 147.097656 6.164062 C 147.101562 6.386719 147.148438 6.597656 147.238281 6.796875 C 147.328125 7 147.453125 7.175781 147.613281 7.328125 L 263.679688 117.554688 L 121.300781 13.15625 C 121.125 13.015625 120.925781 12.917969 120.707031 12.855469 C 120.488281 12.796875 120.269531 12.785156 120.046875 12.8125 C 119.820312 12.84375 119.613281 12.917969 119.417969 13.03125 C 119.222656 13.148438 119.058594 13.296875 118.925781 13.480469 C 118.792969 13.660156 118.699219 13.859375 118.648438 14.082031 C 118.59375 14.300781 118.585938 14.519531 118.625 14.742188 C 118.660156 14.964844 118.742188 15.171875 118.863281 15.363281 C 118.984375 15.554688 119.136719 15.714844 119.324219 15.84375 L 260.4375 119.332031 L 94.355469 25.839844 C 94.164062 25.730469 93.957031 25.660156 93.734375 25.632812 C 93.515625 25.601562 93.296875 25.617188 93.082031 25.675781 C 92.867188 25.734375 92.671875 25.832031 92.492188 25.96875 C 92.316406 26.105469 92.175781 26.269531 92.0625 26.460938 C 91.953125 26.65625 91.882812 26.863281 91.855469 27.082031 C 91.828125 27.304688 91.839844 27.519531 91.898438 27.734375 C 91.957031 27.949219 92.054688 28.148438 92.191406 28.324219 C 92.328125 28.5 92.492188 28.640625 92.6875 28.753906 L 257.691406 121.644531 L 69.816406 42.648438 C 69.609375 42.5625 69.398438 42.519531 69.175781 42.515625 C 68.953125 42.515625 68.742188 42.554688 68.535156 42.640625 C 68.328125 42.722656 68.148438 42.84375 67.988281 42.996094 C 67.832031 43.152344 67.710938 43.332031 67.621094 43.539062 C 67.535156 43.742188 67.492188 43.953125 67.492188 44.175781 C 67.488281 44.398438 67.53125 44.613281 67.613281 44.816406 C 67.695312 45.023438 67.816406 45.203125 67.972656 45.363281 C 68.128906 45.519531 68.308594 45.640625 68.511719 45.726562 L 255.511719 124.3125 L 48.28125 63.144531 C 48.0625 63.070312 47.839844 63.035156 47.613281 63.050781 C 47.382812 63.066406 47.164062 63.125 46.960938 63.226562 C 46.753906 63.332031 46.578125 63.472656 46.429688 63.648438 C 46.285156 63.824219 46.179688 64.023438 46.113281 64.246094 C 46.046875 64.464844 46.03125 64.6875 46.058594 64.917969 C 46.085938 65.144531 46.15625 65.359375 46.273438 65.558594 C 46.386719 65.757812 46.539062 65.921875 46.722656 66.058594 C 46.90625 66.195312 47.113281 66.289062 47.335938 66.34375 L 253.742188 127.269531 L 30.277344 86.796875 C 30.058594 86.757812 29.84375 86.761719 29.625 86.808594 C 29.410156 86.859375 29.210938 86.945312 29.027344 87.070312 C 28.84375 87.195312 28.695312 87.351562 28.574219 87.539062 C 28.453125 87.726562 28.375 87.929688 28.335938 88.144531 C 28.296875 88.363281 28.300781 88.582031 28.347656 88.796875 C 28.394531 89.015625 28.480469 89.214844 28.609375 89.394531 C 28.734375 89.578125 28.890625 89.730469 29.078125 89.847656 C 29.265625 89.96875 29.464844 90.046875 29.683594 90.085938 L 252.480469 130.449219 L 16.28125 113.003906 C 16.0625 112.988281 15.84375 113.015625 15.632812 113.082031 C 15.421875 113.152344 15.234375 113.261719 15.066406 113.40625 C 14.898438 113.550781 14.761719 113.722656 14.664062 113.917969 C 14.5625 114.117188 14.503906 114.328125 14.488281 114.546875 C 14.472656 114.769531 14.496094 114.984375 14.566406 115.195312 C 14.636719 115.40625 14.742188 115.597656 14.886719 115.765625 C 15.03125 115.933594 15.203125 116.066406 15.402344 116.167969 C 15.601562 116.269531 15.8125 116.328125 16.03125 116.34375 L 251.6875 133.746094 L 6.679688 141.097656 C 6.457031 141.101562 6.246094 141.144531 6.042969 141.234375 C 5.839844 141.320312 5.660156 141.445312 5.507812 141.601562 C 5.351562 141.761719 5.234375 141.945312 5.152344 142.152344 C 5.070312 142.355469 5.03125 142.570312 5.035156 142.792969 C 5.039062 143.011719 5.085938 143.226562 5.171875 143.429688 C 5.257812 143.632812 5.382812 143.808594 5.542969 143.964844 C 5.699219 144.117188 5.882812 144.234375 6.089844 144.316406 C 6.296875 144.398438 6.507812 144.4375 6.730469 144.433594 L 6.78125 144.433594 L 251.4375 137.082031 L 1.601562 170.359375 C 1.382812 170.371094 1.171875 170.429688 0.972656 170.527344 C 0.773438 170.625 0.601562 170.757812 0.453125 170.921875 C 0.308594 171.089844 0.199219 171.277344 0.128906 171.488281 C 0.0546875 171.699219 0.0273438 171.914062 0.0429688 172.136719 C 0.0546875 172.355469 0.113281 172.566406 0.210938 172.765625 C 0.308594 172.964844 0.441406 173.136719 0.609375 173.285156 C 0.773438 173.429688 0.960938 173.539062 1.171875 173.609375 C 1.382812 173.683594 1.597656 173.710938 1.820312 173.695312 L 2.039062 173.695312 L 251.488281 140.460938 L 1.285156 200.035156 C 1.09375 200.085938 0.914062 200.171875 0.75 200.289062 C 0.589844 200.402344 0.449219 200.546875 0.339844 200.710938 C 0.226562 200.875 0.144531 201.058594 0.0976562 201.25 C 0.0507812 201.445312 0.0390625 201.640625 0.0625 201.839844 C 0.0859375 202.039062 0.144531 202.226562 0.234375 202.40625 C 0.324219 202.585938 0.445312 202.742188 0.59375 202.875 C 0.738281 203.011719 0.90625 203.117188 1.089844 203.191406 C 1.277344 203.269531 1.46875 203.308594 1.671875 203.316406 C 1.800781 203.316406 1.929688 203.296875 2.054688 203.265625 L 252.046875 143.71875 L 5.695312 229.378906 C 5.316406 229.515625 5.023438 229.761719 4.820312 230.109375 C 4.617188 230.457031 4.550781 230.832031 4.617188 231.230469 C 4.6875 231.625 4.871094 231.957031 5.179688 232.21875 C 5.488281 232.480469 5.84375 232.613281 6.246094 232.617188 C 6.433594 232.621094 6.617188 232.589844 6.796875 232.527344 L 253.007812 146.929688 L 14.722656 257.628906 C 14.367188 257.796875 14.105469 258.054688 13.933594 258.40625 C 13.761719 258.757812 13.714844 259.125 13.800781 259.503906 C 13.886719 259.886719 14.082031 260.199219 14.386719 260.441406 C 14.691406 260.6875 15.039062 260.808594 15.429688 260.808594 C 15.675781 260.808594 15.910156 260.757812 16.132812 260.652344 L 254.367188 149.984375 L 28.132812 284.078125 C 27.808594 284.269531 27.578125 284.539062 27.4375 284.886719 C 27.296875 285.230469 27.273438 285.585938 27.371094 285.949219 C 27.46875 286.308594 27.664062 286.605469 27.960938 286.832031 C 28.257812 287.0625 28.59375 287.179688 28.964844 287.183594 C 29.265625 287.179688 29.542969 287.101562 29.800781 286.949219 L 256.089844 152.839844 L 45.582031 308.074219 C 45.292969 308.285156 45.09375 308.566406 44.984375 308.910156 C 44.875 309.253906 44.875 309.597656 44.988281 309.9375 C 45.101562 310.28125 45.304688 310.558594 45.597656 310.769531 C 45.890625 310.980469 46.214844 311.085938 46.578125 311.085938 C 46.957031 311.085938 47.296875 310.964844 47.59375 310.726562 L 258.191406 155.492188 L 66.617188 328.921875 C 66.355469 329.152344 66.183594 329.4375 66.101562 329.773438 C 66.015625 330.113281 66.039062 330.445312 66.160156 330.769531 C 66.285156 331.09375 66.492188 331.355469 66.78125 331.550781 C 67.070312 331.75 67.386719 331.84375 67.734375 331.84375 C 68.164062 331.839844 68.539062 331.695312 68.855469 331.40625 L 260.523438 157.804688 L 90.699219 346.179688 C 90.550781 346.34375 90.441406 346.53125 90.367188 346.738281 C 90.292969 346.949219 90.261719 347.164062 90.273438 347.382812 C 90.285156 347.601562 90.339844 347.8125 90.433594 348.011719 C 90.53125 348.210938 90.660156 348.386719 90.824219 348.535156 C 91.140625 348.820312 91.515625 348.964844 91.941406 348.96875 C 92.4375 348.964844 92.847656 348.777344 93.179688 348.410156 L 263.226562 159.792969 L 117.21875 359.382812 C 117.03125 359.636719 116.925781 359.921875 116.902344 360.234375 C 116.875 360.546875 116.933594 360.84375 117.078125 361.121094 C 117.21875 361.402344 117.421875 361.625 117.691406 361.789062 C 117.957031 361.953125 118.25 362.035156 118.5625 362.039062 C 119.128906 362.039062 119.582031 361.8125 119.914062 361.351562 L 266.148438 161.484375 L 145.492188 368.1875 C 145.378906 368.378906 145.308594 368.585938 145.28125 368.804688 C 145.25 369.023438 145.265625 369.238281 145.320312 369.453125 C 145.378906 369.664062 145.472656 369.859375 145.605469 370.035156 C 145.738281 370.210938 145.902344 370.355469 146.09375 370.464844 C 146.351562 370.621094 146.628906 370.695312 146.929688 370.691406 C 147.226562 370.691406 147.503906 370.617188 147.761719 370.46875 C 148.019531 370.320312 148.222656 370.117188 148.371094 369.859375 L 269.28125 162.730469 L 174.792969 372.378906 C 174.703125 372.578125 174.652344 372.789062 174.648438 373.011719 C 174.640625 373.230469 174.675781 373.445312 174.753906 373.652344 C 174.832031 373.859375 174.945312 374.042969 175.097656 374.203125 C 175.25 374.363281 175.425781 374.492188 175.625 374.582031 C 175.84375 374.679688 176.074219 374.730469 176.3125 374.730469 C 176.640625 374.730469 176.941406 374.640625 177.214844 374.464844 C 177.492188 374.285156 177.695312 374.046875 177.832031 373.746094 L 272.589844 163.53125 L 204.382812 371.851562 C 204.316406 372.0625 204.289062 372.277344 204.308594 372.5 C 204.324219 372.71875 204.382812 372.925781 204.484375 373.125 C 204.582031 373.320312 204.71875 373.492188 204.886719 373.636719 C 205.054688 373.78125 205.242188 373.886719 205.453125 373.957031 C 205.621094 374.015625 205.792969 374.046875 205.972656 374.046875 C 206.332031 374.046875 206.660156 373.941406 206.953125 373.726562 C 207.242188 373.515625 207.445312 373.238281 207.558594 372.894531 L 276.027344 163.832031 L 233.527344 366.636719 C 233.480469 366.851562 233.476562 367.070312 233.519531 367.289062 C 233.558594 367.507812 233.640625 367.707031 233.761719 367.894531 C 233.882812 368.078125 234.035156 368.234375 234.21875 368.359375 C 234.402344 368.484375 234.601562 368.570312 234.820312 368.613281 C 234.933594 368.625 235.046875 368.625 235.164062 368.613281 C 235.558594 368.613281 235.90625 368.488281 236.210938 368.238281 C 236.515625 367.988281 236.710938 367.671875 236.792969 367.285156 L 279.492188 163.554688 L 261.40625 356.878906 C 261.386719 357.097656 261.410156 357.3125 261.476562 357.523438 C 261.542969 357.734375 261.644531 357.925781 261.785156 358.09375 C 261.925781 358.265625 262.09375 358.402344 262.289062 358.503906 C 262.484375 358.605469 262.691406 358.667969 262.910156 358.691406 L 263.070312 358.691406 C 263.277344 358.691406 263.480469 358.65625 263.671875 358.582031 C 263.867188 358.507812 264.042969 358.398438 264.195312 358.257812 C 264.351562 358.121094 264.476562 357.957031 264.570312 357.769531 C 264.664062 357.585938 264.71875 357.386719 264.738281 357.179688 L 282.917969 162.722656 L 287.390625 342.757812 C 287.398438 342.976562 287.445312 343.183594 287.53125 343.382812 C 287.617188 343.585938 287.738281 343.761719 287.894531 343.910156 C 288.050781 344.0625 288.230469 344.179688 288.433594 344.261719 C 288.636719 344.34375 288.84375 344.386719 289.0625 344.386719 L 289.105469 344.386719 C 289.320312 344.378906 289.53125 344.335938 289.730469 344.246094 C 289.929688 344.160156 290.105469 344.039062 290.257812 343.882812 C 290.410156 343.726562 290.527344 343.546875 290.609375 343.347656 C 290.691406 343.144531 290.734375 342.933594 290.734375 342.714844 L 286.214844 161.269531 L 310.789062 324.757812 C 310.820312 324.957031 310.882812 325.144531 310.980469 325.320312 C 311.078125 325.496094 311.203125 325.652344 311.355469 325.78125 C 311.511719 325.914062 311.683594 326.015625 311.871094 326.082031 C 312.0625 326.152344 312.257812 326.1875 312.460938 326.183594 L 312.710938 326.183594 C 312.929688 326.152344 313.132812 326.078125 313.320312 325.964844 C 313.511719 325.847656 313.671875 325.703125 313.804688 325.527344 C 313.933594 325.347656 314.027344 325.152344 314.082031 324.9375 C 314.132812 324.722656 314.144531 324.507812 314.113281 324.289062 L 289.253906 159.082031 L 331.003906 303.230469 C 331.109375 303.589844 331.308594 303.878906 331.605469 304.101562 C 331.902344 304.324219 332.238281 304.433594 332.609375 304.433594 C 332.765625 304.4375 332.921875 304.414062 333.074219 304.367188 C 333.289062 304.304688 333.480469 304.207031 333.652344 304.066406 C 333.824219 303.929688 333.960938 303.765625 334.070312 303.570312 C 334.175781 303.378906 334.242188 303.171875 334.265625 302.953125 C 334.289062 302.734375 334.273438 302.519531 334.210938 302.304688 L 291.910156 156.253906 L 347.546875 278.820312 C 347.679688 279.121094 347.886719 279.359375 348.160156 279.535156 C 348.4375 279.714844 348.738281 279.804688 349.066406 279.804688 C 349.207031 279.804688 349.34375 279.789062 349.480469 279.753906 C 349.613281 279.71875 349.742188 279.667969 349.867188 279.601562 C 349.988281 279.535156 350.101562 279.453125 350.203125 279.359375 C 350.304688 279.261719 350.394531 279.15625 350.472656 279.039062 C 350.546875 278.921875 350.605469 278.796875 350.652344 278.664062 C 350.695312 278.53125 350.722656 278.394531 350.730469 278.257812 C 350.742188 278.117188 350.734375 277.976562 350.710938 277.839844 C 350.683594 277.703125 350.644531 277.570312 350.585938 277.445312 L 293.980469 152.671875 L 359.988281 251.988281 C 360.320312 252.484375 360.785156 252.734375 361.382812 252.730469 C 361.714844 252.730469 362.023438 252.640625 362.300781 252.457031 C 362.484375 252.332031 362.640625 252.179688 362.761719 251.996094 C 362.886719 251.8125 362.96875 251.613281 363.011719 251.398438 C 363.058594 251.179688 363.058594 250.964844 363.015625 250.746094 C 362.972656 250.527344 362.890625 250.328125 362.769531 250.144531 L 295.308594 148.632812 L 368.039062 223.664062 C 368.367188 224.003906 368.765625 224.171875 369.238281 224.171875 C 369.574219 224.171875 369.882812 224.078125 370.160156 223.890625 C 370.4375 223.707031 370.640625 223.460938 370.773438 223.152344 C 370.902344 222.84375 370.9375 222.523438 370.875 222.195312 C 370.8125 221.867188 370.667969 221.582031 370.433594 221.34375 L 295.757812 144.300781 L 371.519531 194.417969 C 371.796875 194.601562 372.105469 194.695312 372.4375 194.695312 C 372.804688 194.691406 373.136719 194.582031 373.429688 194.363281 C 373.722656 194.144531 373.925781 193.859375 374.03125 193.507812 C 374.136719 193.160156 374.128906 192.808594 374.007812 192.464844 C 373.882812 192.117188 373.667969 191.84375 373.363281 191.640625 Z M 373.363281 191.632812 " fillOpacity="1" fillRule="nonzero"/></g></svg>
    );
  };
  