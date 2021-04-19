import { NavLink, withRouter } from 'react-router-dom';

const NavInf = ({ match, location }) => {
  return (
    <div>
      <h2 className="titleInf">Additional information</h2>
      <ul className="inform">
        <li className="informItem">
          <NavLink
            className="detailsInform"
            activeClassName="active"
            to={{
              pathname: `${match.url}/cast`,
              state: { from: location?.state?.from },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="detailsInform"
            activeClassName="active"
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: location?.state?.from },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(NavInf);
