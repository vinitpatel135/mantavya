import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../Common/i18n";
import { useLanguage } from "../Common/LanguageContext";

const drawerWidth = 240;
// const navItems = [{ name: "Home", path: "/" }, { name: "About", path: "/AboutUs" }, { name: "Product", path: "/Product" }, { name: "gallary", path: "/Gallary" }, { name: "Contact", path: "/ContactUs" }];
// const products = [
//   { name: "Iphone 16 Pro Max", category: "Electronix", subCategory: "Mobile" },
//   { name: "Asus Tuf F15", category: "Electronix", subCategory: "Laptop" },
//   { name: "T-Shirt", category: "Cloths", subCategory: "Men" },
//   { name: "Dress", category: "Cloths", subCategory: "Women" },
//   { name: "Carrot", category: "Groceries", subCategory: "Groceries" },
// ];
const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    // acc[product.category].push(product.subCategory);
    acc[product.category].push({
      subCategory: product.subCategory,
      link: product.link,
    });
    return acc;
  }, {});
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 820, // Set the 'sm' breakpoint to 615px
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// const NoHoverMenuItem = styled(MenuItem)({
//   "&:hover": {
//     backgroundColor: "transparent",
//     cursor: "default",
//   },
// });

function Header(props) {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const navItems = t("header.navItems", { returnObjects: true });
  const products = t("header.productList", { returnObjects: true });
  const { window, Component } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openProduct, setOpenProduct] = React.useState(false);
  const [openItem, setOpenItem] = React.useState(""); // null, 'Item 1', or 'Item 2'
  const [openProductDropdown, setOpenProductDropdown] = React.useState(false);
  const location = useLocation()
  const [selectedNavItem, setSelectedNavItem] = React.useState(location.pathname);
  const navigate = useNavigate();

  const categories = groupByCategory(products || []);

  // const handleProductClick = (item) => {
  //    navigate(item.path)
  //   setOpenProduct((prev) => !prev);
  // };

  const handleItemClick = (category) => {
    console.log(category);
    setOpenItem((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          {t("header.mui")}
        </Typography>
        <Divider />
      </Box>
      <List sx={{ textAlign: "center" }}>
        {navItems.map((item) =>
          item.name === "Product" ||
          item.name === "ઉત્પાદન" ||
          item.name === "उत्पाद" ? (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => {
                  navigate(item.path);
                  setOpenProduct((prev) => !prev);
                }}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.name}
                {openProduct ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
              {openProduct && (
                <ul style={{ paddingLeft: "0px", marginTop: "5px" }}>
                  {categories && Object.keys(categories).length > 0 ? (
                    Object.keys(categories).map((category, i) => (
                      <li
                        key={i}
                        style={{ listStyle: "none", margin: "8px 0" }}
                      >
                        <button
                          onClick={() => handleItemClick(category)}
                          style={{
                            background: "none",
                            border: "none",
                            fontSize: "16px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {category}
                          {openItem[category] ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </button>
                        {openItem[category] && (
                          <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
                            {categories[category].map((subCategory, idx) => (
                              <li
                                key={idx}
                                onClick={() => navigate(subCategory.link)}
                              >
                                {subCategory.subCategory}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))
                  ) : (
                    <li>No categories available.</li>
                  )}
                </ul>
              )}
            </li>
          ) : (
            <li key={item.name}>
              <button onClick={() => navigate(item.path)}>{item.name}</button>
            </li>
          )
        )}
      </List>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Button color="primary" variant="outlined">
          <Typography variant="p">Download</Typography>
          <DownloadIcon />
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    changeLanguage(language);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          // className="textd"
          sx={{
            backgroundColor: "#ffffff", // Change AppBar color here
            // Optional: Adjust other AppBar styles
          }}
        >
          <Typography
            variant="div"
            className="container-fluid py-1 headerone"
            style={{ backgroundColor: "#006834" }}
          >
            <div className="row d-flex align-items-center justify-content-center gap-1 justify-content-sm-between mx-3">
              {/* Left side: Dropdown */}
              <div className="col-auto">
                <select
                  className="form-select form-select-sm w-auto"
                  style={{ fontSize: "0.6em" }}
                  aria-label="Language Dropdown"
                  value={language}
                  onChange={handleLanguageChange} // Call the handler on change
                >
                  <option value="en">English</option>
                  <option value="gu">Gujarati</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
              {/* Right side: Contact information */}
              <div className="col-auto d-flex justify-content-cente align-items-center">
                <PhoneIcon className="me-2" />
                <a
                  href="tel:+917698410448"
                  className="text-white text-decoration-none"
                >
                  +91 76984 10448
                </a>
              </div>
            </div>
          </Typography>
          <Container>
            <Toolbar className="row">
              <Typography
                variant="h6"
                component="div"
                className="col-1 d-flex align-items-center"
                sx={{ flexGrow: 1, display: { sm: "block" } }}
              >
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" }, color: "#E31E24" }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h5" className="p-1">
                  <img
                    src="/images/matavya logo 1.png"
                    alt="LOGO"
                    width={"70vw"}
                  />
                </Typography>
              </Typography>
              <Typography
                component="div"
                className="col-7"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                }}
              >
                <Box>
                  {/* {navItems.map((item) =>
                    item.name === "Product" ||
                    item.name === "ઉત્પાદન" ||
                    item.name === "उत्पाद" ? (
                      <div
                        key={item.name}
                        className="dropdown textd"
                        onMouseEnter={() => setOpenProductDropdown(true)}
                        onMouseLeave={() => setOpenProductDropdown(false)}
                      >
                        <Button
                          sx={{
                            color: selectedNavItem === item.path ? "white" :"#006834",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            backgroundColor:
                              selectedNavItem === item.path ? "#E31E24" : "",
                          }}
                          className="textd"
                          onClick={() => {
                            setSelectedNavItem(item.path);
                            navigate(item.path);
                          }}
                        >
                          {item.name}
                        </Button>
                        {openProductDropdown && (
                          <div className="dropdown-content">
                            <div className="scroll">
                              {Object.keys(categories).map(
                                (category, index) => (
                                  <div
                                    key={index}
                                    className="dropdown-item"
                                    onClick={() =>
                                      navigate(categories[category][0].link)
                                    }
                                  >
                                    {category}
                                    {categories[category][0]?.subCategory
                                      ?.length > 0 ? (
                                      <div className="sub-dropdown-content">
                                        {categories[category].map(
                                          (subCategory, idx) => (
                                            <div
                                              key={idx}
                                              className="sub-dropdown-item"
                                              onClick={(e) => {
                                                e.stopPropagation(); // Prevent parent click event
                                                navigate(subCategory.link);
                                              }}
                                            >
                                              {subCategory.subCategory ||
                                                "No Subcategory"}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Button
                        key={item.name}
                        sx={{
                          color:
                            selectedNavItem === item.path ? "white" : "#006834",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          backgroundColor:
                            selectedNavItem === item.path ? "#E31E24" : "",
                        }}
                        className="textd"
                        onClick={() => {
                          setSelectedNavItem(item.path);
                          navigate(item.path);
                        }}
                      >
                        {item.name}
                      </Button>
                    )
                  )} */}
                   {navItems.map((item) =>
        item.name === "Product" ||
        item.name === "ઉત્પાદન" ||
        item.name === "उत्पाद" ? (
          <div
            key={item.name}
            className="dropdown textd"
            onMouseEnter={() => setOpenProductDropdown(true)}
            onMouseLeave={() => setOpenProductDropdown(false)}
          >
            <Button
              sx={{
                color: selectedNavItem === item.path ? "#E31E24" : "#006834",
                fontWeight: "bold",
                fontSize: "1.1rem",
                borderBottom: selectedNavItem === item.path ? "#E31E24" : "",
              }}
              className="textd"
              onClick={() => {
                setSelectedNavItem(item.path);
                navigate(item.path);
              }}
            >
              {item.name}
            </Button>
            {openProductDropdown && (
              <div className="dropdown-content">
                <div className="scroll">
                  {Object.keys(categories).map((category, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => navigate(categories[category][0].link)}
                    >
                      {category}
                      {categories[category].length > 0 && (
                        <div className="sub-dropdown-content">
                          {categories[category].map((subCategory, idx) => (
                            <div
                              key={idx}
                              className="sub-dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent parent click event
                                navigate(subCategory.link);
                              }}
                            >
                              {subCategory.subCategory || "No Subcategory"}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Button
            key={item.name}
            sx={{
              color: selectedNavItem === item.path ? "#E31E24" : "#006834",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderBottom: selectedNavItem === item.path ? "#E31E24" : "",
            }}
            className="textd"
            onClick={() => {
              setSelectedNavItem(item.path);
              navigate(item.path);
            }}
          >
            {item.name}
          </Button>
        )
      )}
                </Box>
              </Typography>

              <Typography
                variant=""
                sx={{ my: 2, display: { xs: "none", sm: "block" } }}
                className="col-3 text-end"
              >
                <Button
                  sx={{ color: "#fff", backgroundColor: "#E31E24" }}
                  variant="outlined"
                >
                  <Typography variant="p">{t("header.download")}</Typography>
                  <DownloadIcon />
                </Button>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {Component}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
