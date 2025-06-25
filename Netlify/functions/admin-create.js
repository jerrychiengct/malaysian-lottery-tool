exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const { username, email, password, full_name } = body;

    if (!username || !email || !password || !full_name) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: "Admin created successfully",
        data: { username, email, full_name }
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: "Invalid JSON format", error: err.message }),
    };
  }
};
