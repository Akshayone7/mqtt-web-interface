<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MQTT Web Interface</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20px;
        }
        .device {
            margin: 20px;
            padding: 20px;
            background-color: #f0f0f0;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            display: inline-block;
        }
        button {
            width: 100px;
            height: 50px;
            font-size: 16px;
            margin: 10px;
            border-radius: 8px;
            cursor: pointer;
        }
        .on {
            background-color: #4CAF50;
            color: white;
        }
        .off {
            background-color: #f44336;
            color: white;
        }
    </style>
</head>
<body>
    <h2>MQTT Web Control</h2>
    
    <div class="device">
        <h3>TV</h3>
        <button class="on" id="tv-on">Turn ON</button>
        <button class="off" id="tv-off">Turn OFF</button>
    </div>
    
    <div class="device">
        <h3>AC</h3>
        <button class="on" id="ac-on">Turn ON</button>
        <button class="off" id="ac-off">Turn OFF</button>
    </div>

    <!-- MQTT.js -->
    <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
    <script>
        // Adafruit IO credentials and MQTT connection
        const ioUsername = 'your_username';
        const ioKey = 'your_adafruit_io_key';
        const mqttServer = 'mqtt://io.adafruit.com';
        const tvTopic = `${ioUsername}/feeds/tv`;
        const acTopic = `${ioUsername}/feeds/ac`;

        // Connect to MQTT broker
        const client = mqtt.connect(mqttServer, {
            username: ioUsername,
            password: ioKey,
            port: 1883
        });

        client.on('connect', () => {
            console.log('Connected to MQTT Broker');
        });

        // Publish message to turn TV ON
        document.getElementById('tv-on').addEventListener('click', function () {
            client.publish(tvTopic, 'ON');
        });

        // Publish message to turn TV OFF
        document.getElementById('tv-off').addEventListener('click', function () {
            client.publish(tvTopic, 'OFF');
        });

        // Publish message to turn AC ON
        document.getElementById('ac-on').addEventListener('click', function () {
            client.publish(acTopic, 'ON');
        });

        // Publish message to turn AC OFF
        document.getElementById('ac-off').addEventListener('click', function () {
            client.publish(acTopic, 'OFF');
        });
    </script>
</body>
</html>

