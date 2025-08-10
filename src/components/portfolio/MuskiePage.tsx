import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MuskiePage() {

    const codeExample = `
import numpy as np
from muskie.models import ClassificationModel
from muskie.layers import *
from muskie.data import Data
from muskie.activation_functions import Tanh
from muskie.processing import train
from muskie.optimizers import SGD
from muskie.loss_functions import MSE

inputs = np.reshape([[0,0], [0,1], [1,0], [1,1]], (4,2,1))
labels = np.reshape([[0], [1], [1], [0]], (4,1,1))
data = Data(inputs, labels)

model  = ClassificationModel([
    Dense(input_size=2, output_size=3, activation=Tanh),
    Dense(1)
])

train(model=model, data=data, epochs=10000, optimizer=SGD(lr=0.1), loss=MSE())
print("BEFORE TRAINING:")
print(x1)
print(x2)
print(x3)
print(x4)
print("")
print("AFTER TRAINING:")
print(model.forward(np.reshape([0,0], (2,1))))
print(model.forward(np.reshape([0,1], (2,1))))
print(model.forward(np.reshape([1,0], (2,1))))
print(model.forward(np.reshape([1,1], (2,1))))
    `

    const resExample = `
Training: 100% |############################| loss: 0.0  

[ FINISHED TRAINING IN: 1.62 SECONDS ]

BEFORE TRAINING:
[[-1.11497663]]
[[0.12581535]]
[[-1.01016975]]
[[0.24266287]]

AFTER TRAINING:
[[0.]]
[[1.]]
[[1.]]
[[0.]]
    `

    return (
        <div className="flex flex-col w-[100%]">
            <a target="_blank" href="https://github.com/03axdov/muskie" className="w-full text-4xl pb-3 flex flex-row items-center tracking-widest border-b border-gray-600 mb-5 text-gray-200">
                MUSKIE
                <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 text-sm ml-3" />
            </a>
            <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                borderRadius: "0.5rem",
                padding: "0 20px",
                width: "100%",
                fontSize: "0.9rem",
                }}
            >
                {codeExample}
            </SyntaxHighlighter>
            <SyntaxHighlighter
                language=""
                style={vscDarkPlus}
                customStyle={{
                borderRadius: "0.5rem",
                padding: "0 20px",
                width: "100%",
                fontSize: "0.9rem",
                }}
            >
                {resExample}
            </SyntaxHighlighter>
            <p className="mt-10 text-lg text-gray-400">
                A machine-learning framework built from "scratch" using Python and the math library Numpy. 
                It allows users to create and train machine-learning models (both regression and image classification are supported).
                See above for a very basic example of how to create a model.
            </p>
            <div className="flex flex-row items-center gap-x-3 mt-5 w-full">
                <a target="_blank" href="https://github.com/03axdov/Dalinar" 
                className="flex flex-row items-center justify-center rounded-full p-2 px-6 border border-gray-600 hover:border-gray-400">
                    <i className="fa-brands fa-github fa-lg mr-3" />
                    Muskie GitHub
                </a>
            </div>

            <p className="text-xl mt-10 w-full text-gray-200 pb-1 border-b border-gray-600">Frameworks and technologies used</p>
            <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-400 text-blue-400">
                    <i className="fa-brands fa-python fa-lg mr-3"></i>
                    Python
                </p>
            </div>
            
        </div>
    )
}