import PropTypes from 'prop-types';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';

export function DefaultSidebar({ handleMenu, isOpen }) {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="flex gap-42 mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
        <FaPlus
          onClick={handleMenu}
          className={`text-2xl cursor-pointer  flex justify-end text-right ${
            isOpen ? 'block' : 'hidden'
          }`}
        />
      </div>
      <List>
        <ListItem onClick={handleMenu}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>

          <Link to="/dashboard/addProducat"> Add A Producat</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/dashboard/producats">My Producats</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem onClick={handleMenu}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

DefaultSidebar.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
};
