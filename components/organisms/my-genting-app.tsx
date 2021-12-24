import tw, { css } from 'twin.macro'

type IImage = {
  file: string;
  width: number;
  height: number;
  classes: string;
}

const styles = {
  pattern: [
    tw`absolute left-0 bottom-0 right-0 z-0 bg-cover bg-right-bottom bg-no-repeat transform -translate-y-48`,
    css`
      background-image: url(/assets/images/mobile-my-genting-app-background@2x.png);
      padding-top: 106.1333333333%;

      @media (min-width: 640px) {
        background-image: url(/assets/images/desktop-my-genting-app-background@2x.png);
        padding-top: 38.6458333333%;
      }
    `,
  ],
  wrapper: [
    tw`relative flex flex-col md:self-center lg:self-end mt-20 md:mt-10 lg:mt-0 ml-0 md:ml-10 lg:ml-0`,
    css`padding-top: 96.050955414%;`,
  ],
};

function MyGentingApp() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-theme-accent to-theme-gradient-dark">
      <div css={styles.pattern} />

      <div className="max-w-7xl m-auto py-20 px-8 grid grid-cols-1 md:grid-cols-2 relative z-10">
        <div className="text-center md:text-left font-extralight">
          <h2 className="text-4.5xl font-light uppercase tracking-widest leading-12">Download<br /> My Genting App</h2>
          <ul className="mt-6 list-disc list-inside space-y-4">
            <li>Enjoy 10% off ALL drinks*</li>
            <li>Earn even more points by completing our in App challenges</li>
            <li>Unlock exclusive rewards and receive instant points to your reward card</li>
            <li>Stay up to date with latest game releases and events at your local casino</li>
            <li>Track your points and points balance</li>
          </ul>
          <p className="mt-8 text-xs">Available on Android and iOS devices,<br /> with our free to download app</p>

          <div className="mt-5.5 -mb-2.5 -mx-2.5 flex flex-col lg:flex-row justify-items-start">
            <a
              href="https://apps.apple.com/gb/app/my-genting/id1445691797?ls=1"
              className="px-4 py-2 m-2.5 flex items-center justify-center text-center border focus:outline-none focus:ring-2 focus:ring-theme-secondary text-white border-white"
            >
              <svg id="layer1" xmlns="http://www.w3.org/2000/svg" width="16.795" height="19.979" viewBox="0 0 16.795 19.979">
                <path id="path2997" d="M258.71,406.768a4.441,4.441,0,0,0,2.768,4.043,10.771,10.771,0,0,1-1.427,2.841c-.86,1.217-1.752,2.429-3.158,2.455-1.381.025-1.825-.793-3.4-.793s-2.072.768-3.379.818c-1.357.05-2.39-1.316-3.257-2.529-1.771-2.481-3.125-7.009-1.307-10.066a5.075,5.075,0,0,1,4.268-2.5c1.333-.024,2.59.868,3.4.868s2.342-1.074,3.949-.916a4.871,4.871,0,0,1,3.772,1.982,4.51,4.51,0,0,0-2.229,3.8m-2.6-7.424a4.311,4.311,0,0,0,1.073-3.19,4.676,4.676,0,0,0-3.039,1.514,4.1,4.1,0,0,0-1.094,3.091,3.873,3.873,0,0,0,3.06-1.415" transform="translate(-244.684 -396.154)" fill="#fff"/>
              </svg>
              <span className="ml-3">Download on Apple</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.genting.rewards"
              className="px-4 py-2 m-2.5 flex items-center justify-center text-center border focus:outline-none focus:ring-2 focus:ring-theme-secondary text-white border-white"
            >
              <svg id="Group_736" data-name="Group 736" xmlns="http://www.w3.org/2000/svg" width="19.205" height="22.724" viewBox="0 0 19.205 22.724">
                <path id="Path_1093" data-name="Path 1093" d="M7.665,100.362a1.4,1.4,0,0,0-1.406,1.406v5.855a1.406,1.406,0,0,0,2.811,0v-5.855A1.4,1.4,0,0,0,7.665,100.362Z" transform="translate(-6.259 -92.985)" fill="#fff"/>
                <path id="Path_1094" data-name="Path 1094" d="M214.888,100.362a1.4,1.4,0,0,0-1.406,1.406v5.855a1.406,1.406,0,0,0,2.811,0v-5.855A1.4,1.4,0,0,0,214.888,100.362Z" transform="translate(-197.088 -92.985)" fill="#fff"/>
                <path id="Path_1095" data-name="Path 1095" d="M57.747,9.2l.99-1.789a.2.2,0,0,0-.172-.3.2.2,0,0,0-.176.1l-1,1.808a6.757,6.757,0,0,0-5.424,0l-1-1.808a.2.2,0,0,0-.271-.078.194.194,0,0,0-.077.271L51.6,9.2A5.728,5.728,0,0,0,48.4,14.24H60.941A5.728,5.728,0,0,0,57.747,9.2ZM51.78,11.945a.523.523,0,1,1,.523-.523A.527.527,0,0,1,51.78,11.945Zm5.786,0a.523.523,0,1,1,.523-.523A.527.527,0,0,1,57.566,11.945Z" transform="translate(-45.071 -7.117)" fill="#fff"/>
                <path id="Path_1096" data-name="Path 1096" d="M48.4,112.495a1.512,1.512,0,0,0,1.515,1.515h1.005v3.1a1.406,1.406,0,0,0,2.811,0v-3.1H55.61v3.1a1.406,1.406,0,0,0,2.811,0v-3.1h1.005a1.512,1.512,0,0,0,1.515-1.515v-9.086H48.4Z" transform="translate(-45.071 -95.791)" fill="#fff"/>
              </svg>
              <span className="ml-3">Download on Android</span>
            </a>
          </div>
          <p className="mt-4 text-xl uppercase tracking-widest">
            Download to start earning today!
          </p>
          <p className="mt-8 text-xs">*Excludes Scottish casinos</p>
        </div>
        <div css={styles.wrapper}>
          <img
            className="absolute top-0 left-0 w-full h-auto"
            src="/assets/images/desktop-my-genting-app-2x_NEW.png"
            alt="MyGenting membership card and app showing on mobile phone"
          />
        </div>
      </div>
    </section>
  )
}

export { MyGentingApp }
