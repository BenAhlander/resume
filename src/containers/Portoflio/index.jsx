import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ImageStepper from "../../components/ImageStepper";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Typography from "@material-ui/core/Typography";
import openInNewTab from "../../utils/openInNewTab";

const ChunkerLogoUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABfCAYAAAAzpNjsAAAACXBIWXMAAAsSAAALEgHS3X78AAAO8UlEQVR4nO2dz08b1xbHv2OMHSDFPKSw82Mq0VUi1Wp3vAVDNm5Wmay6e7h/QanEvmSPVEfvD6jp6mWVYRW8KcOi2SV1pGZVFkbsiMTDBAIGzLyFbXyx58e1PffOD5+PhLj2jGeux3e+95xzz72jWJYFgmAxy8YMgFzrpdr6s6Pa+gOAipbXj0XWi4geCgnMaGCWDY15aVeeAfC1T6d7D6AtNhWmbN6eNK+bIGIPCUxEMcuGio5lkUNTIOzKGakVG4zd1v9jNAWpp6zl9UrPp4jQQwITErrcEqeyCmBebs1Cxz46blmVKbOWErlrIYEERiBm2WCtCY3ZxJaXZNVnRGHdNZN5/7ZM7po4SGD6oMstYctRdEvc2GXKpse+7HePuljWYO+iVcFYTVper4LgYuQFhgl+urkofgU/g8Ip6Hpb9rsXdwgqx+26su6a7XXFiLtrsROYLrfEyUWhnjZEuAyLs+U4W4btcuyC2aEXGM7GpyL6wc+Ra3yDMoKdSBX2ge3QdyKBCAyZz2Q+y4TDDVYR/Q5KuhvMgy8Cw5mTEacexSlfI/Q9CuHOiAfyfc894haYllmqo3OhVcRL9U3m/dsyDWESboxIKgJrjZsADF7x8RQYs2ysAlhFNMTEKQmLLZNb4sLRhuJkgaro9OZVdK7nnV5vds2iOJEDLsmUKqIXT9wHUAJQdLufHAWm5beWEPyXpTTyITjaUIJq1DxBysrsmkVi70BEpoPUABS0vG7YbbQVGLNsFAH8KKhCNBFuSI42FI15aVeOYpDcs13MrlkmCEcCHjzZ1PJ6ofvNHoExy0YJwEofB47FcFqQHG0oKsLfU4UNL8u2OrtmVWVXKioISv/oEZk7AsNhuWwBMNCMY5Bb4oCLWxK3odGowDVBktw1Z1rB7ByalpGbAXJHZG4FpmVe7Th8aBdNP6s6fFWjSVfwU2M2seWojxYQTTxHF0fZXWvFhooAnjrs8qwdk2EFpgr7HvUnLa8X/a9msHS5JU5lcksIL7imbcTRXTPLRgHArzabagBULa8fK5ZltYeif7HZMVLiwgQ/3VyUqAU/iXjBleEdFXfNRWSea3l9vS0wVfRaL7taXtcE188Vl5wMjdmN3BIiznhm3Aade2SWDQO97lJNy+szys72qxyAP20+96XfMZeu4KeK+E5cJIgg4BrR9dtda41IVdEbTnim7Gy/Wgfwc9eGLS2v6zwHd8jJILeEIMKP5wRJ3mC2Q3rLiyQ6QsBim5UH3FohJThHkAmCiAZsx28bajjaUNrFXQC6S2zIQK/A5BLoxDVY3Hw6O3+LIIh4swQXwwP2S6uqCbs9PZLoKKhKEKOJ473vMOFx3lZgCIIg/IAEhiAIYZDAEAQhDBIYgiCEQQJDEIQwSGAIghBGMoiTjs3lkFrQMTaXQyJtl4bjzfXHChqHFVz+bcCqe88Lm3xcRPKBXU5hh6sDE+dv1j2PNbG4jvGs5lm/z7+vDvx5nrqkHxWQflhw3eemfoxTwz4pm6ceAFD/UEL9r5Lnfvd1w/X3dKsLz3dxu6ZtxrMaJhbXvarqWJfUgo5737qfY1hOtwu4qVWlnbtxUkXjsIL6XyWue8VPpAqMkp7B1JMSUgvD5+kls80h+cnlIs5eF3C555YDBCQf5G4/48Y5x7nHsxrXsYb9vFddEtOqlHoks0tIZjWcvS647jfM7zrsdwE67Ssx7T2V7Wz7B9v3x+b42skwjE2rtgIj6txJLAEPVzCxuI7PO6tcnYVfSHWRvtANX8SFRUlncF9/xdUTE4OTfriC9KNC0NVwhVdc6h82pd5kYUFJZzD13a9ILXBNM/QFaQIzsbgutGfgMYuJ4ZhcLkIZ0KUVTfpRgavzanx872mJxZ3Jx/KWeJImMKL92mR2CWNz7jEWYjiUdAYT/1oPuho9jM3lMLnsfdNY9Ro+OcSARonE9Lw0i1+KwKQfFaCkxa88SW6SeO5982PohPz+kxJX+zp7bR9cHUVk/YZSBCYp6caXdZ5RZ4rDWpDF5OMixh54Lzd08e6F50DAKCHL1ZUyisRrWVy8ewHrwn4YLfWV7tmQBh3yJvojmV1C+lEh8EDpeFbDvW+8nw/Y+Pjec3i7X87fPB/4s9eHw61w+enlsu37iYzaipOFZ516KQLDG9l3awSXewYy/7Zb2bND2Ez3ODOxuM6dgyQCJT2D+/ZPK72DqLgLT76UKK4OTPsNB83rMrlst37/XcazGldKxrAId5F4rRcv37jBofphUu64k5ieFx64d+ML3aC4iw089wnQTL6TQWimCvBcGKtek1ATgpeJxZ+RyKjSz3vv21WulAeKuzgjS3SFu0i8DZDH1G4cVoTm0iQyKlc+TRA3VVi5/10JJy81KedKZFSkFnQuF+D6YNf3uAtLakHndg8dXRoBhC1PSbzATKu+HetsZ1VoIDcxPY+Jxe4HLBBuJLNLSC3oUiyFxPQ87uuvPPeTke/CU482zMLZwkn+U+Paj9eVGpZAJjsOSuOwgkbQlRgxbk72PYP0k4+LUntpL04Nfusiikw+LtqOtvLOLbPqNWm/V6QEhpDP599XMeWRyBZ0wJflcm8rVGInAp6heTcu3halCXBogrxEOLHqx1xDsmERmNTCU6mT+aJG/cOm1CF2EhjCk4u3RVwf7LruE6YUgabFFa5gZ9Bc7m3h08tl6RM9SWAILs52wmGh8KCkM/iCIwlvlEgtPEXqUUH6CGikYjA8q9INM2Rq1Wtc0fWxuVyoemwZNA4ruHj3Ymj/fxiseg0Xb4tcI33J7BLufbuKi7di5k3xThUIU7A5/XAFqQUdJy+1+Iwi+flFxrMa18S2QWkcVrgEavp7U/iqZ35xc7Lv27HO/1hHakHnmvohgsZh5TZ+wCMyk8u/4OrAFHIzBTlVYBiUdAZTy0VpuUvCBYZXwRMZFThw30ekuEQRnrlXfmZsWvVjfP59ta8cEBGcv1nnmvwKNKcU1DZzobIkhuV///nHne+jpGeQnMu11sXxTkJMZpegpGekXBPhMRjeOQ9+JuTFgXYjcN0ngMmdl3sGLve2pJ+3m1POYGViel7qCm4y6BYGq36MqwMTF2+LqH/Y5DqGrLYj3ILh7UFTX+muZifP0GPj43vOWgXL1QGfi5VZqeByz7BNqkp9FZyr8nlnFeNZLdA4VNNdes7lKqUfruDqb2Mk5iU1DivAw5Wgq3GLlCDv9cGu5w019uBrzK5ZtsOhiYzKdTM5rSUTVRLT80MHVUXMmr2pVbmDrSLpx1WaelLC9W8531zGzEpl4PZ2trMqLMgqK3jLixyB+cg/SXGY4On1x3BdXCdkNgJR5+rn5hbJ6esCpr83Pa0pJZ3xdWLmMN87kZ4JfMpLMqtJyXiWkgcja+WzsKm3EzJT2UWeS+RsZV7YkSUvktklevqEZKQITOOw4pkJ6geXf0fDx7bqx1ICpTcn+0JF9+rAxMW7F8KOzwtPpnGbicWfaeVDiUjL5BWdCVr/sBmpoUgZeRQyLIzzP9ZDsRDY6XaBux7N1fDiOZVA1kp1vEgTmMZhxfFxnUMfW8CizqIReT2AZqapjFETq34cigeZ3dSq3KKdmJ7H1JOS0PoEBW8QO1aPLWlT/6uETy+XfXOXrHoN52+e4+S/WqSslzZ+Xw+gKbanxjOpmaaXewY+7/wk7XxO9OMqpRaehv5RuIPCY8nJegKHsrP9ygRwZ+hGy+uOS3AdbSiWLyduZR8Oyk39uK/4wthczvOiNk6qXD1AIqNizCMxsN/6DXs9gObjMPoRWp5r0s8xea6LU9DZr2vaz3W0Ox5PPYbF6ZryntsrcM/zu/bbPtvMrlmO2mCWjR5tCExgCIKIHv0KDC3XQBCEMEhgCIIQBgkMQRDCIIEhCEIYJDAEQQiDBIYgCGHYCoxZNtwSCcRPKiIIIow43vtm2bBLvNlPALDLonITGN3tRARBxJJdNO99JzSb96pJABUAT212LtkdZXbNOm4f7GhDmUFHjNiy2vprl4NZeo0gCDf2AVRb5apDudK6572wE5+KsrP9KgfgT5uNX2p5vWrz/sAcbSg5NIUIaIqRXTkay/UTRDhhvQuz9f8YTUMCAI5n1yxf1/BouUdVAN2rfj1TLMuCWTaq6LUytrS8HugzOI82FI152S53W030qAEizrxHJ4xRsSvPrlmm/Gp1MMuGgV4vqKbl9Zn2kplFAN3PO3hqlo1VLa8HtiR714UzHXYD0OOuqbjrorXLOfSqLEHIpAbGmmDKVTAuyuyaVUUEMMtGAb3iAjQ1BW0LZgbNL2oXK/kpSJERhYu7pjG7kbtG8GDnlrBl392SMNASl19tNtUAqFpeP1Ysy2rvrANweqLWFoBVv2MyUYJx19wC2xTMjgds8NPWLQF/8DN2tAySEuwtFwD4QcvrJaBlwTAfLAJwe07GJpqqbI6y2HhxtKGocHbRWKuJ3DU5OLkld1yUqLglQWCWDRXNNqsDcHvw0qaW1wvtF3cEpnWgkscBuvEMQml53ezjeCNHl7umMZvYMrlrd2Hbncm8f1sOOvgZdsyyoTEv2+VhBlHuiAtgIzCtE3tZMsPgOYym5fXY+at+EePcI6ecDHJLOGll4AeVBtIjLoCDwAC3MZkigm2orGlbhUMD1PI6NToHutw1twYowl1rdyZObkksg59+0Yp1hL0zqQEoaHndsNvoKDDA7RdcBVBANHpEJ3fNbO9A7po7DrlH3WWA3JKBcHBL2HJUcrtqaBogRbcO3lVgWFrml47OhYhDkNKzhyV3jXCjFfxUWy9lW4gyad8rJpqDPCbPh7gFxo0YqbIbXDECcteijYtbEreUBCnWvi8C0w8R8Sv9wHOUg9w1OXQFPzVmE1uO+ihdKOOV0gWmXwKOjMuCK32cco+adLklbDmubgkQ0RHX0AtMvwgY2w8jXJmmUXLXmN/NzUWJ+u82cjljsROYfnDpCdlyXHtCtux7T+hieWrMbmR5xpyRFph+GcGbporOjeKEinjFzqSLcZwhgREIh9mvIvo3ZNih0b8AIYEJCSMUuBwWromLo+yWhAkSmIjCMfQapaAoDenHFBKYESCA3COuxaTJLYk/JDBEDy7p791EKieDkM//AZeiBFbD2ad4AAAAAElFTkSuQmCC";

const overstockImages = [
  {
    imgPath: "https://storage.googleapis.com/resume_assets/overstock1.png",
    label: "Overstock landing page",
  },
  {
    imgPath: "https://storage.googleapis.com/resume_assets/overstock2.png",
    label: "Overstock home page",
  },
  {
    imgPath: "https://storage.googleapis.com/resume_assets/overstock3.png",
    label: "Overstock shopping page",
  },
];

const chunkerImages = [
  {
    imgPath: "https://storage.googleapis.com/resume_assets/overstock3.png",
    label: "Chunker landing page",
  },
  {
    imgPath: "https://storage.googleapis.com/resume_assets/SubmitDemand.PNG",
    label:
      "If Chunker does not have a warehouse that fits the needs of a user, they can publish their demand to be searched by landlords",
  },
  {
    imgPath:
      "https://storage.googleapis.com/resume_assets/ChunkerListingEdit.PNG",
    label: "Landlords can create listings",
  },
  {
    imgPath:
      "https://storage.googleapis.com/resume_assets/ChunkerListingDetail.PNG",
    label: "Listing detail page",
  },
  {
    imgPath: "https://storage.googleapis.com/resume_assets/ChunkerSearch.PNG",
    label: "Future tenants can search warehouses using a variety of filters",
  },
  {
    imgPath:
      "https://storage.googleapis.com/resume_assets/ChunkerLicenseDashboard.PNG",
    label: "Users can license a warehouse though the platform",
  },
  {
    imgPath:
      "https://storage.googleapis.com/resume_assets/ChunkerLicenseForm.PNG",
    label:
      "Values from form are replaced into a legal document that is signed electronically",
  },
];

const spaceMonkeyImages = [
  {
    imgPath:
      "https://storage.googleapis.com/resume_assets/ninjaSpaceMonkey.PNG",
    label:
      "Users create an AWS IAM user with AWS Cognito and the Amplify React SDK",
  },
  {
    imgPath:
      "https://storage.googleapis.com/resume_assets/ninjaSpaceMonkey2.PNG",
    label: "Users view conversation starters from a DynamoDB",
  },
];

function Tile({ Title, images, description, website, buttonText, name, img }) {
  return (
    <>
      <Grid item xs={12}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ marginBottom: "16px" }}
        >
          <img
            src={img}
            style={{ maxWidth: "200px", maxHeight: "60px" }}
            alt={name}
          />
          {!!Title && Title}
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12}>
          <ImageStepper listImages={images} />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} style={{ marginBottom: "16px", marginTop: "16px" }}>
          <Typography>{description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => openInNewTab(website)}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

function Overstock() {
  return (
    <Tile
      images={overstockImages}
      description="I was hired to work on a project to create Overstock Goverment. This site allows users who are tax exempt to buy products from Overstock. My team inhereted an MVP and have sclaed it to meet the needs of a large customer base. The site is built with ReactJS, NodeJS, and ExpressJs. React hooks are used for state mangament and side effects of state changes. A Node middlware handles all API calls to REST endpoints."
      website="www.overstockgoverment.com"
      buttonText="Visit Overstock Government"
      name="overstock goverment"
      img="https://storage.googleapis.com/resume_assets/overstockLogo.png"
    />
  );
}

function Chunker() {
  return (
    <Tile
      images={chunkerImages}
      description="Chunker is a platform to find short-term warehouse space. This project has raised
      over $1 million dollars and has hundreds of users, most are
      corporate accounts and include some big names like Dish Network, WalMart, LL
      Brands, and Toll-Group. Chunker is built with ReactJs, MaterialUI,
      Redux and integrates with Stripe, HelloSign, and more."
      website="www.chunker.com"
      buttonText="Visit Chunker"
      name="Chunker"
      img={ChunkerLogoUrl}
    />
  );
}

function NinjaSkillGames() {
  return (
    <Tile
      Title={
        <Typography variant="h5" style={{ marginLeft: "16px" }}>
          <b>Ninja</b>SpaceMonkey
        </Typography>
      }
      images={spaceMonkeyImages}
      description=" NinjaSpaceMonkey is created using the serverless AWS Amplify stack.
      This includes Amplify serverless web hosting, IAM and Cognito for
      authentication, Lambda for serverless functions (I used node), and API
      gateway to bridge Lambda to DynamoDB. I used the Amplify React SDK
      to connect the React front end to AWS backend."
      website="https://www.ninjaspacemonkey.com/"
      buttonText="Visit NinjaSpaceMonkey"
      name="Ninja Space Monkey"
      img="https://storage.googleapis.com/resume_assets/spaceMonkeyLogo.png"
    />
  );
}

export default ({ useDarkTheme }) => {
  return (
    <div style={{ marginTop: "10px", marginBottom: "28px" }}>
      <Paper elevation={0} style={{ padding: "20px" }}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  align="center"
                  style={{ marginTop: "16px" }}
                >
                  PROJECTS
                </Typography>
              </Grid>
              <Grid item xs={12} sm={10} md={8} lg={4}>
                <Paper
                  style={{
                    padding: "16px",
                    height: "100%",
                    backgroundColor: useDarkTheme ? "#616161" : "#eee",
                  }}
                >
                  <Overstock />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10} md={8} lg={4}>
                <Paper
                  style={{
                    padding: "16px",
                    height: "100%",
                    backgroundColor: useDarkTheme ? "#616161" : "#eee",
                  }}
                >
                  <Chunker />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10} md={8} lg={4}>
                <Paper
                  style={{
                    padding: "16px",
                    height: "100%",
                    backgroundColor: useDarkTheme ? "#616161" : "#eee",
                  }}
                >
                  <NinjaSkillGames />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
