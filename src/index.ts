import pino from 'pino';

const redact = { remove: true, paths: ['pid', 'hostname'] };

const level = (label: string) => ({ level: label.toUpperCase() });

export default pino({ redact, formatters: { level } });
