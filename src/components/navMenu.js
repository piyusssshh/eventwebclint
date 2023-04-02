const navMenu = () => {
  return (
    <>
      <div className="section nav py-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h3 className="c-s-1 c-head fw-semibold">ARIHANTEVENTS.COM</h3>
          <div className="nav-menu d-flex justify-content-end gap-4 align-items-center">
            <a href="/about">
              <h3 className="c-s-2 c-body fw-regular">About</h3>
            </a>
            <a href="/services">
              <h3 className="c-s-2 c-body fw-regular">Services</h3>
            </a>
            <a href="/gallery">
              <h3 className="c-s-2 c-body fw-regular">Gallery</h3>
            </a>
            <a href="/events">
              <h3 className="c-s-2 c-body fw-regular">Events</h3>
            </a>
            <a href="/contact">
              <h3 className="c-s-2 c-body fw-regular">Contact</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default navMenu;
