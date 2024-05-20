"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-row ml-12 space-x-64">
        <div className="flex flex-col mt-20 space-y-24">
          <div className="flex flex-col space-y-24">
            <h3 className="text-white text-5xl">Total Value Locked in ABC</h3>
            <h3 className="text-8xl bg-gradient-to-r from-red-200 to-cyan-300 bg-clip-text text-transparent">
              $ 1,567,094,259
            </h3>
            <h1 className="text-white text-2xl items-center justify-center">
              ABC lets anyone to decentralized crypto trading,
              <p className="pl-10">swap, and earn interest, borrow assets.</p>
            </h1>
          </div>
          <div className="flex flex-row space-x-16">
            {/* <button className="w-72 h-16 bg-[#CC8677] rounded-2xl text-2xl font-bold text-white">Connect Your Wallet</button> */}
            <div>
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  mounted,
                }) => (
                  <div
                    {...(!mounted && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {!mounted || !account || !chain ? (
                      <button
                        className="customConnectButton"
                        onClick={openConnectModal}
                        type="button"
                      >
                        Connect Wallet
                      </button>
                    ) : chain.unsupported ? (
                      <button
                        className="customConnectButton"
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network
                      </button>
                    ) : (
                      <div style={{ display: "flex", gap: 12 }}>
                        <button
                          className="customConnectButton"
                          onClick={openChainModal}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <Image
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  width={24}
                                  height={24}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>

                        <button
                          className="customConnectButton"
                          onClick={openAccountModal}
                          type="button"
                        >
                          {account.displayName}
                          {account.displayBalance &&
                            ` (${account.displayBalance})`}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </ConnectButton.Custom>
            </div>
            <button className="w-72 h-16 bg-[#44878B] rounded-2xl text-2xl font-bold text-white">
              I&apos;m a dApp
            </button>
          </div>
        </div>
        <div className="relative ">
          <Image
            src={"/dragon.png"}
            alt="Dragon"
            width={500}
            height={500}
            className="relative z-10"
          />
          <Image
            src={"/rock.png"}
            alt="Rock"
            width={500}
            height={500}
            className="absolute top-[490px] left-0 z-0"
          />
        </div>
      </div>
    </main>
  );
}