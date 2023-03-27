export const getErrorObj = (message: string) => {
  return { status: "fail", message };
};

export const getResponseObj = (data: any) => {
  return { status: "success", data };
};
