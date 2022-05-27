function play() {


  var context = new AudioContext();
  var node = context.createGain();
  node.gain.value = 0.005;
  node.connect(context.destination);

  playOscillator(
    addNoteToOscillator(
      connectToGainNode(
        node,
        createOscillator(context, "sawtooth")
      ), 
      72, 
      context.currentTime, 
      0
    )
  , 0, 0.1);
  
  playOscillator(
    addNoteToOscillator(
      connectToGainNode(
        node,
        createOscillator(context, "sawtooth")
      ), 
      64, 
      context.currentTime, 
      0
    )
  , 0, 0.1);

  playOscillator(
    addNoteToOscillator(
      connectToGainNode(
        node,
        createOscillator(context, "sawtooth")
      ), 
      67, 
      context.currentTime, 
      0
    )
  , 0, 0.1);

playOscillator(
  addNoteToOscillator(
    connectToGainNode(
      node,
      createOscillator(context, "sawtooth")
    ), 
    72, 
    context.currentTime, 
    0
  )
, 0.15, 1);

playOscillator(
  addNoteToOscillator(
    connectToGainNode(
      node,
      createOscillator(context, "sawtooth")
    ), 
    64, 
    context.currentTime, 
    0
  )
, 0.15, 1);

playOscillator(
  addNoteToOscillator(
    connectToGainNode(
      node,
      createOscillator(context, "sawtooth")
    ), 
    67, 
    context.currentTime, 
    0
  )
, 0.15, 1);

}

function connectToGainNode(node, osc) {
  osc.connect(node);
  return osc;
}

function playOscillator(osc, startTime, stopTime) {
  osc.start(startTime);
  osc.stop(stopTime);
}

function createOscillator(context, wave) {
  var osc = context.createOscillator();
  if(wave) {
    osc.type = wave;
  }
  return osc;
}

function addNoteToOscillator(osc, note, start, constant) {
  osc.frequency.setTargetAtTime(Math.pow(2, (note-69)/12) * 440, start, constant);
  return osc;
}
