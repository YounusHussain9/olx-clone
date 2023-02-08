import Badge from 'react-bootstrap/Badge';

function FeaturedBadge() {
  return (
    <div>     
      <Badge bg="warning" text="dark" style={{position:'absolute' , top:'.5rem'}}>
        FEATURED
      </Badge>{' '}
  
    </div>
  );
}

export default FeaturedBadge;