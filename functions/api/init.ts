export const onRequestGet = async () => {
  return new Response(JSON.stringify({
    status: 'ok',
    message: '初始化成功'
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
