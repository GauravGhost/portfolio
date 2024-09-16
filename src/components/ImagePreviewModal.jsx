import React from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { cross } from '../assets';

const ImagePreviewModal = ({ isOpen, setIsOpen, image }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-50"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-900"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-50"
                        >
                            <DialogPanel className="w-full max-w-2xl lg:hover:scale-150 lg:hover:cursor-zoom-in transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                <img src={image} alt="Preview" className="w-full h-full" />
                                <button
                                    type="button"
                                    className="absolute top-1 right-1 inline-flex justify-center border border-transparent"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <img src={cross} className='h-5 w-5'/>
                                </button>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ImagePreviewModal;