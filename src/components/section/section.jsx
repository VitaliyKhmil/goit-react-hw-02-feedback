import PropTypes from 'prop-types';
import { SectionBox, SectionTitle } from './section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};