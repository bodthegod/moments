import React, { useState } from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";

const PopularProfiles = () => {
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const {popularProfiles} = profileData;

  useEffect(() => {
    const handleMount = async => {
        try {
            
        } catch (err) {
            
        }
    }
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <Container className={appStyles.Content}>
      <p>Most followed profiles.</p>
    </Container>
  );
};

export default PopularProfiles;
