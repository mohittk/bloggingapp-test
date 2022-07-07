const base = "http://localhost:5000";

export const login_user = async (obj) => {
  const res = await fetch(`${base}/api/user/login`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const signup_user = async (obj) => {
  const res = await fetch(`${base}/api/user/signup`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  });

  const ans = await res.json();
  return ans;
};

export const auth_user = async (obj) => {
  const res = await fetch(`${base}/api/user/auth`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  });

  const ans = await res.json();
  return ans;
};

export const create_article = async (obj) => {
  const res = await fetch(`${base}/api/user/articlepost`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  });

  const ans = await res.json();
  return ans;
};

export const get_all_articles = async () => {
  const res = await fetch(`${base}/api/user/allarticlesposts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const ans = await res.json();
  return ans;
};

export const get_user_by_id = async (obj) => {
  const res = await fetch(`${base}/api/user/userdetails`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_articles = async (obj) => {
  const res = await fetch(`${base}/api/user/getarticlesposted`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  });
  const ans = await res.json();
  return ans;
};
