import { json } from 'co-body'
import axios from 'axios';
/* interface IData {
  email: string
}
 */
export async function omsHook(ctx: Context, next: () => Promise<any>) {
  try {
    const { OrderId } = await json(ctx.req)

    console.log(OrderId)

    const { clientProfileData: { document: userId, email: email } } = await ctx.clients.oms.order(OrderId)

    console.log(userId)
    const userEmail = email.split("-", 1)[0];
    console.log(userEmail);
    console.log(typeof userEmail);

    ctx.body = 'OK'
    ctx.status = 200

    let newClient: any = [];
    await axios.get(
      `https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads`
    ).then((response) => {
      response.data.forEach((item: any) => {
        if (userEmail === item.email) {
          console.log(`Found prospect: ${item.email}`);
          newClient.push(item);
          newClient[0].isClient = true;
          console.log('Prospect saved to array');
          return newClient;
        }
      })
    })

    await console.log(newClient);

    try {
      await axios.put(
        `https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads/${newClient[0].id}`
        , {
          isClient: newClient[0].isClient,
          id: newClient[0].id,
          nome: newClient[0].nome,
          email: newClient[0].email,
          telefone: newClient[0].telefone,
          createdAt: newClient[0].createdAt
        }).then(() => console.log("PUT Success"))
    } catch (error) {
      console.log(error.response);
    }

    await next()
  } catch (error) {
    console.log(error)

    ctx.status = 200
    ctx.set('Cache-Control', 'no-cache no-store')
    await next()
  }
}