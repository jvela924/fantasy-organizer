$(() => {
  const addTeam = () => {
    const $baseballContainer = $('.baseballContainer')
    const $footballContainer = $('.footballContainer')
    const $footballTeam = $('.footballTeam')
    const $baseballTeam = $('.baseballTeam')
    console.log($baseballContainer);
    $baseballContainer.append($baseballTeam)
    $footballContainer.append($footballTeam)
  }

addTeam();

$('button').on('click', () => {
  const $row = $('<div>')
  $row.addClass('newPlayers')
  $row.css("display", "flex")
  $row.css("flex-direction", "row")
  const $text1 = $('<p>')
  const $text2 = $('<p>')
  const $text3 = $('<p>')
  $text1.text("Name:")
  $text2.text("Team:")
  $text3.text("Position:")
  const $input1 = $('<input>')
  $input1.attr("type", "text")
  $input1.attr("name", "players")
  const $input2 = $('<input>')
  $input2.attr("type", "text")
  $input2.attr("name", "players")
  const $input3 = $('<input>')
  $input3.attr("type", "text")
  $input3.attr("name", "players")
  $row.append($text1)
  $row.append($input1)
  $row.append($text2)
  $row.append($input2)
  $row.append($text3)
  $row.append($input3)
  $('#players').append($row)
})

let clicked = false

$('.dropdown-toggle').on('click', () => {
  if (clicked === false) {
    $('.dropdown-menu').css("display", "block")
    clicked = true
  } else {
    $('.dropdown-menu').css("display", "none")
    clicked = false
  }

})

})
