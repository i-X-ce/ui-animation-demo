import ScreenItem from "./ScreenItem";

function ScreenSizeView() {
  return (
    <div className="flex flex-col gap-4">
      <ScreenItem size="sm" chipName="phone" />
      <ScreenItem size="lg" chipName="desktop" />
    </div>
  );
}

export default ScreenSizeView;
