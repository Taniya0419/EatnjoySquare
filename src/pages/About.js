
import Layout from '../components/Layout/Layout'
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
        <Box
        sx={{
          my: 10,
          textAlign: "center",
          p: 2,
          "& h5": {
            fontWeight: "bold",
            my: 4,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h5 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h5">Welcome To Eatnjoy Square</Typography>
        <p>
        Our mission at Eatnjoy Square is to make everyday cooking fun, 
        because we believe that cooking is key to a happier and healthier life for people, 
        communities and the planet. We empower homecooks all over the world to help each 
        other by sharing recipes and cooking tips.


        </p>
        <br />
        <p>
        Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for canned, frozen, and other prepared ingredients. We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert.

There are three things we think about when deciding if a recipe is good enough to go on Simply Recipes:

First, does it work? Recipes need to be easy to follow and provide reliable results, every time.

Second, is it delicious? Does the dish make us smile inside and out? Do we want to eat the whole batch by ourselves? 

Third, is it worth the effort? Do we want to make it again (and again and again)?

To make sure each of these standards is met, we start by working with expert recipe developers  — people with the experience and knowledge to not only develop a good recipe in their own kitchens, but to make sure that recipe works in yours. Next, we thoroughly review and edit every recipe in-house line by line. Finally, each new recipe is run by our team of recipe testers working in home kitchens with the same pots, pans, and tools that you use in yours. Only after all this is the recipe shared on Simply Recipes.
        </p>
      </Box>
        
    </Layout>
  )
}

export default About