export const validatePhone = (value) => {
  const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (!value) {
    return <span style={{ color: "red" }}>This field is required!</span>;
  } else if (vnf_regex.test(value) === false) {
    return <span style={{ color: "red" }}>Incorrect telephone number</span>;
  }
};
