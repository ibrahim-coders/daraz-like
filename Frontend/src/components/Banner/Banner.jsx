import { useEffect } from 'react';
import banner from '../../assets/Banner/Image-2.webp';
import banner2 from '../../assets/Banner/img-1.webp';
import banner3 from '../../assets/Banner/imag-2.webp';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css'; // Don't forget to import Glide's CSS

const Banner = () => {
  useEffect(() => {
    const slider = new Glide('.glide-03', {
      type: 'slider',
      focusAt: 'center',
      perView: 1, // default perView value for mobile
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      breakpoints: {
        640: {
          perView: 1,
        },
        768: {
          perView: 2,
        },
        1024: {
          perView: 3,
        },
      },
      classes: {
        nav: {
          active: '[&>*]:bg-wuiSlate-700',
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full glide-03">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={banner}
                alt="Banner 1"
                className="w-full max-w-full max-h-full m-auto"
              />
            </li>
            <li>
              <img
                src={banner2}
                alt="Banner 2"
                className="w-full max-w-full max-h-full m-auto"
              />
            </li>
            <li>
              <img
                src={banner3}
                alt="Banner 3"
                className="w-full max-w-full max-h-full m-auto"
              />
            </li>
          </ul>
        </div>

        {/* Indicators */}
        <div
          className="flex items-center justify-center w-full gap-2 mt-4"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
