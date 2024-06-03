const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += ' - ' + item.value + '\n'

    console.log({ name, address})
    })

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nseu pedido: " + observations
      )
})