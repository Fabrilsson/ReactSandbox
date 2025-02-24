interface OrderFooterProps {
  closeHour: number;
}

interface ClosedFooterProps {
  openHour: number;
  closeHour: number;
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <OrderFooter closeHour={closeHour}></OrderFooter>
      ) : (
        <ClosedFooter closeHour={closeHour} openHour={openHour}></ClosedFooter>
      )}
    </footer>
  );
}

function OrderFooter({ closeHour }: OrderFooterProps) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn"> Order Now</button>
    </div>
  );
}

function ClosedFooter({ closeHour, openHour }: ClosedFooterProps) {
  return (
    <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.
    </p>
  );
}

export default Footer;
