import { ReactComponent as IconClaims } from "~/assets/footer_claims.svg";
import { ReactComponent as IconPolicies } from "~/assets/footer_policies.svg";
import { ReactComponent as IconCustomers } from "~/assets/footer_customers.svg";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <header>
        <img src="/logo.png" width="55" height="55" alt="TATA AIG LOGO" />
      </header>
      <main>{children}</main>
      <footer>
        <figure className="mq-inline center">
          <div className="icon">
            <IconPolicies />
          </div>
          <figcaption>500k + Policies issued</figcaption>
        </figure>
        <figure className="mq-inline center">
          <div className="icon">
            <IconCustomers />
          </div>
          <figcaption>10M Happy Customers</figcaption>
        </figure>
        <figure className="mq-inline center">
          <div className="icon">
            <IconClaims />
          </div>
          <figcaption>98% Claim Ratio</figcaption>
        </figure>
      </footer>
    </div>
  );
};
