module.exports = (data) => {
  return {
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    gender: data.gender,
    job_role: data.job_role,
    department: data.department,
    address: data.address,
    created_on: data.created_on
  }
}
